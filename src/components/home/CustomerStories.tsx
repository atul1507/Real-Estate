"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BASE_DATA = [
    { name: "Rahul Sharma", review: "Found my dream home in just a few days" },
    { name: "Priya Singh", review: "Selling my property was smooth and simple" },
    { name: "Aman Verma", review: "Verified listings made me feel confident" },
    { name: "Neha Gupta", review: "The fastest way I found my new rental home" },
    { name: "Vikram Rao", review: "Trusted agents guided me at every step" },
    { name: "Sneha Patel", review: "A stress-free journey from search to keys" },
    { name: "Rohit Kumar", review: "The platform saved my time and effort" },
    { name: "Ananya Das", review: "Simple, secure and highly recommended" },
    { name: "Arjun Mehta", review: "Property search finally became effortless" },
    { name: "Kavya Nair", review: "Loved the clean experience and support" }
];

const DATA = [...BASE_DATA, ...BASE_DATA, ...BASE_DATA, ...BASE_DATA].slice(0, 36);

const ANGLE_PER_CARD = 10; 
const RADIUS = 1400;       

export default function CustomerStoriesArc() {
    const [rotation, setRotation] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        
        timerRef.current = setInterval(() => {
            setRotation((prev) => prev - ANGLE_PER_CARD);
        }, 2000);
    }, []);

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [startTimer]);

    const handleNext = () => {
        setRotation((prev) => prev - ANGLE_PER_CARD);
        startTimer();
    };

    const handlePrev = () => {
        setRotation((prev) => prev + ANGLE_PER_CARD);
        startTimer();
    };

    return (
        <section className="relative w-full h-[600px] bg-orange-200 overflow-hidden flex flex-col items-center pt-16">
            
            <div className="text-center z-20 mb-10 relative">
                <h2 className="text-4xl font-bold text-gray-900">What Our Customers Say</h2>
            </div>

            <div
                className="absolute top-[1700px] left-1/2 w-0 h-0 transition-transform duration-700 ease-in-out z-10"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {DATA.map((item, i) => {
                    const cardAngle = i * ANGLE_PER_CARD;
                    const absoluteAngle = (cardAngle + rotation) % 360;
                    const normalizedAngle = (absoluteAngle + 360) % 360;
                    
                    const isActive = normalizedAngle < 1 || normalizedAngle > 359;

                    return (
                        <div
                            key={i}
                            className={`absolute w-56 h-48 -ml-28 -mt-24 bg-white rounded-3xl flex flex-col items-center justify-center transition-all duration-700 select-none
                            ${isActive 
                                ? 'shadow-[0_0_35px_rgba(59,130,246,0.5)] border border-blue-200 z-20 opacity-100' 
                                // FIX: Darkened to gray-300 and bumped opacity to 70 to make the outline clearly pop
                                : 'shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-300 opacity-70 z-0' 
                            }`}
                            style={{
                                transform: `rotate(${cardAngle}deg) translateY(-${RADIUS}px)`,
                                padding: '1.25rem'
                            }}
                        >
                            <div className="flex flex-col items-center justify-center w-full h-full" style={{ transform: `rotate(${-cardAngle - rotation}deg)`, transition: 'transform 700ms ease-in-out' }}>
                                
                                <p className={`text-center italic transition-colors duration-700 ${isActive ? 'text-gray-800 text-base' : 'text-gray-500 text-sm'}`}>
                                    "{item.review}"
                                </p>
                                
                                {isActive && (
                                    <span className="mt-4 font-bold text-blue-600 transition-opacity duration-700 text-center text-sm">
                                        - {item.name}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="absolute bottom-16 flex gap-4 z-30">
                <button 
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all active:scale-95"
                    aria-label="Previous"
                >
                    <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                
                <button 
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all active:scale-95"
                    aria-label="Next"
                >
                    <ChevronRight size={20} strokeWidth={1.5} />
                </button>
            </div>

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-orange-200 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-orange-200 to-transparent pointer-events-none z-20" />
            
        </section>
    );
}