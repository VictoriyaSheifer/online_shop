import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})
export class ErrorsService {
    constructor() { }

    async errorHandeling(error: any) {
        //console.log("DEVELOPER_ERROR : ", error['ERROR'].DEVELOPER_ERROR, error['ERROR'].DISPLAY_ERROR)
        Swal.fire({
            text: error['ERROR'].DISPLAY_ERROR + " \n נסה שנית מאוחר יותר !!",
            icon: 'error',
            title: "שגיאת שרת !!",
            showConfirmButton: false,
            timer: 5500
        })
    }


    async errorHandelingHttp(error: any) {
        Swal.fire({
            text: error.message + " \n נסה שנית מאוחר יותר !!",
            icon: 'error',
            title: "שגיאת שרת !!",
            showConfirmButton: false,
            timer: 5500
        })
    }
}
