"use client";

import { useEffect, useRef, useState } from "react";
import {
    LucideIcon, Home, ShieldCheck, Search, Users, Lock, Heart,
    MapPin, Clock, Headphones, BadgeCheck
} from "lucide-react";

const DATA : [string, LucideIcon][] = [
    ["Verified Homes", ShieldCheck],
    ["Fast Search", Search],
    ["Trusted Agents", Users],
    ["Secure Deals", Lock],
    ["Best Prices", BadgeCheck],
    ["Support", Headphones],
    ["Favorites", Heart],
    ["Locations", MapPin],
    ["Quick Process", Clock],
    ["Easy Deals", BadgeCheck],
];

// Physics Constants
const CONSTANT_SPEED = 0.7;
const CARD_W = 200;
const CARD_H = 70;

const normalize = (vx: number, vy: number, speed: number) => {
    const len = Math.sqrt(vx * vx + vy * vy);
    if (len === 0) {
        const angle = Math.random() * Math.PI * 2;
        return { vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed };
    }
    return { vx: (vx / len) * speed, vy: (vy / len) * speed };
};

export default function WhyChooseUs() {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    // 1. Detect Screen Size & Handle Hydration
    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768); // 768px is standard tablet breakpoint
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // --- DESKTOP: Physics Setup ---
    const area = useRef<HTMLDivElement>(null);
    const dragging = useRef<number | null>(null);
    const dragVelocity = useRef({ vx: 0, vy: 0 });

    const cards = useRef(
        DATA.map((_, i) => {
            const init = normalize((Math.random() - 0.5), (Math.random() - 0.5), CONSTANT_SPEED);
            return {
                x: 80 + (i % 4) * 220,
                y: 80 + Math.floor(i / 4) * 90,
                vx: init.vx,
                vy: init.vy,
            };
        })
    );

    const [, setFrame] = useState(0);

    useEffect(() => {
        if (isMobile || !mounted) return; // Completely pause physics loop on mobile

        let id: number;

        function animate() {
            const box = area.current?.getBoundingClientRect();
            if (!box) return;

            const cArr = cards.current;

            for (let i = 0; i < cArr.length; i++) {
                if (dragging.current === i) continue;
                cArr[i].x += cArr[i].vx;
                cArr[i].y += cArr[i].vy;
            }

            for (let i = 0; i < cArr.length; i++) {
                if (dragging.current === i) continue;
                let c = cArr[i];
                let hitWall = false;

                if (c.x < 0) { c.x = 0; c.vx = Math.abs(c.vx); hitWall = true; }
                else if (c.x > box.width - CARD_W) { c.x = box.width - CARD_W; c.vx = -Math.abs(c.vx); hitWall = true; }

                if (c.y < 0) { c.y = 0; c.vy = Math.abs(c.vy); hitWall = true; }
                else if (c.y > box.height - CARD_H) { c.y = box.height - CARD_H; c.vy = -Math.abs(c.vy); hitWall = true; }

                if (hitWall) {
                    const v = normalize(c.vx, c.vy, CONSTANT_SPEED);
                    c.vx = v.vx; c.vy = v.vy;
                }
            }

            const cx = box.width / 2;
            const cy = box.height / 2;
            const R = 72;

            for (let i = 0; i < cArr.length; i++) {
                if (dragging.current === i) continue;
                let c = cArr[i];

                const px = Math.max(c.x, Math.min(cx, c.x + CARD_W));
                const py = Math.max(c.y, Math.min(cy, c.y + CARD_H));

                const dx = cx - px;
                const dy = cy - py;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < R && dist > 0.1) {
                    const nx = -dx / dist;
                    const ny = -dy / dist;
                    const push = R - dist;

                    c.x += nx * push;
                    c.y += ny * push;

                    const dot = c.vx * nx + c.vy * ny;
                    c.vx = c.vx - 2 * dot * nx;
                    c.vy = c.vy - 2 * dot * ny;

                    const v = normalize(c.vx, c.vy, CONSTANT_SPEED);
                    c.vx = v.vx; c.vy = v.vy;
                }
            }

            for (let i = 0; i < cArr.length; i++) {
                for (let j = i + 1; j < cArr.length; j++) {
                    let A = cArr[i];
                    let B = cArr[j];

                    const cxA = A.x + CARD_W / 2;
                    const cyA = A.y + CARD_H / 2;
                    const cxB = B.x + CARD_W / 2;
                    const cyB = B.y + CARD_H / 2;

                    const dx = cxB - cxA;
                    const dy = cyB - cyA;

                    const overlapX = CARD_W - Math.abs(dx);
                    const overlapY = CARD_H - Math.abs(dy);

                    if (overlapX > 0 && overlapY > 0) {
                        if (overlapX < overlapY) {
                            const shift = overlapX / 2;
                            const dir = dx > 0 ? 1 : -1;

                            if (dragging.current !== i) A.x -= shift * dir;
                            if (dragging.current !== j) B.x += shift * dir;

                            const temp = A.vx; A.vx = B.vx; B.vx = temp;
                        } else {
                            const shift = overlapY / 2;
                            const dir = dy > 0 ? 1 : -1;

                            if (dragging.current !== i) A.y -= shift * dir;
                            if (dragging.current !== j) B.y += shift * dir;

                            const temp = A.vy; A.vy = B.vy; B.vy = temp;
                        }

                        if (dragging.current !== i) {
                            const vA = normalize(A.vx, A.vy, CONSTANT_SPEED);
                            A.vx = vA.vx; A.vy = vA.vy;
                        }
                        if (dragging.current !== j) {
                            const vB = normalize(B.vx, B.vy, CONSTANT_SPEED);
                            B.vx = vB.vx; B.vy = vB.vy;
                        }
                    }
                }
            }

            setFrame(v => v + 1);
            id = requestAnimationFrame(animate);
        }

        animate();

        return () => cancelAnimationFrame(id);
    }, [isMobile, mounted]);

    // --- MOBILE: Scroll Animation Setup ---
    const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!isMobile || !mounted) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger the animation by swapping Tailwind classes
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');

                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        mobileCardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, [isMobile, mounted]);

    // Prevents Next.js/React hydration errors
    if (!mounted) return <section className="py-20 min-h-screen bg-gradient-to-b from-white via-orange-100 to-orange-200" />;

    return (
        <section className="bg-gradient-to-b from-white via-orange-100 to-orange-200 py-20 overflow-hidden">
            <div className="text-center mb-10 px-4">
                <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us</h2>
                <p className="text-gray-500 mt-3">Making your property journey simple and trusted</p>
            </div>

            {isMobile ? (
                // --- MOBILE LAYOUT ---
                <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-blue-600 shadow-[0_0_50px_rgba(37,99,235,.5)] flex items-center justify-center text-white mb-2">
                        <Home size={48} />
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        {DATA.map(([title, Icon], i) => (
                            <div
                                key={title as string}
                                ref={(el) => { mobileCardsRef.current[i] = el; }}
                                // Initial state: invisible and pushed down 10px
                                className="opacity-0 translate-y-10 transition-all duration-700 ease-out bg-white rounded-2xl shadow-md px-6 py-5 flex items-center gap-4"
                            >
                                {/* @ts-ignore */}
                                <Icon className="text-blue-600 shrink-0" size={24} />
                                <b className="text-lg">{title}</b>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // --- DESKTOP LAYOUT ---
                <div ref={area} className="relative mx-auto h-[520px] max-w-7xl overflow-hidden">

                    {/* CENTER HUB */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-blue-600 shadow-[0_0_100px_rgba(37,99,235,.6)] flex items-center justify-center text-white z-10">
                        <Home size={70} />
                    </div>

                    {DATA.map(([title, Icon], i) => (
                        <div
                            key={title as string}
                            onPointerDown={(e) => {
                                e.currentTarget.setPointerCapture(e.pointerId);

                                dragging.current = i;
                                dragVelocity.current = { vx: 0, vy: 0 };
                            }}
                            onPointerMove={(e) => {
                                if (dragging.current !== i) return;

                                const box = area.current!.getBoundingClientRect();
                                const newX = e.clientX - box.left - (CARD_W / 2);
                                const newY = e.clientY - box.top - (CARD_H / 2);

                                dragVelocity.current = {
                                    vx: newX - cards.current[i].x,
                                    vy: newY - cards.current[i].y
                                };

                                cards.current[i].x = newX;
                                cards.current[i].y = newY;
                            }}
                            onPointerUp={() => {
                                dragging.current = null;
                                const throwVec = normalize(dragVelocity.current.vx, dragVelocity.current.vy, CONSTANT_SPEED);
                                cards.current[i].vx = throwVec.vx;
                                cards.current[i].vy = throwVec.vy;
                            }}
                            style={{
                                transform: `translate3d(${cards.current[i].x}px, ${cards.current[i].y}px, 0)`,
                                width: `${CARD_W}px`,
                                height: `${CARD_H}px`
                            }}
                            className="absolute select-none will-change-transform cursor-grab active:cursor-grabbing bg-white rounded-3xl shadow-xl px-8 py-5 flex items-center gap-4 z-20 hover:shadow-2xl"
                        >
                            {/* @ts-ignore */}
                            <Icon className="text-blue-600 shrink-0" />
                            <b className="whitespace-nowrap">{title}</b>
                        </div>
                    ))}
                </div>
            )}

            <div className="text-center mt-12 px-4">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600">10,000+</h3>
                <p className="text-gray-500">Families Found Home</p>
            </div>
        </section>
    );
}