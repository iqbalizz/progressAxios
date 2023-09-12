import axios, { isCancel, AxiosError } from "axios";

//! Contoh Penggunaan Axios Untuk Mengambil Data dengan Metode GET
//Mwngambil data aPi terlebih dahulu
const getData = `https://nv-superprocessor.com/login_register.html`;
// axios.get(getData)

//     //Menghandle response nya
//     .then((response) => {
//         console.log(response)
//     })
//     //Menghandle ketika error
//     .catch((error) => {
//         console.log(error)
//     })
//     //Always menjalankan permintaan dalam kondisi error maupun tidak error
//     .finally(() => {

//     });

//!Contoh Menggunakan Parameter Dalam Permintaan GET
//Bisa dicek di documentasi nya langsung
//!Menggunakan async/await dengan Axios:
// async function testAja() {
//     try {
//         const response = await axios.get(getData);
//         console.log(response)
//     } catch (error) {
//         console.error(error)
//     }
// }


//! Melakukan Permintaan POST
//Data yang di request kan
// const phoneNumber = '085156645662';

// axios.post(getData, {
//     mobile_prefix: '+91',
//     mobile: `082134567788`,
//     password: 'Iqbal12345',
//     password1: 'Iqbal12345',
//     invitation: '0QEEG4'
// })
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });







