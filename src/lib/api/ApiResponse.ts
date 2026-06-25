export class ApiResponse {


    statusCode:number;


    message:string;


    data:any;





    constructor(

        statusCode:number,

        message:string,

        data:any = null

    ){


        this.statusCode = statusCode;


        this.message = message;


        this.data = data;


    }


}