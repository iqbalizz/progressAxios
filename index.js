import axios, { isCancel, AxiosError } from "axios";
import fs from "fs";

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


//! AXIOS API

//Menggunakan Objeck Konfigurasi dalam axios
// axios({
//     method: 'POST',
//     url: getData,
//     data: {
//         mobile_prefix: '+91',
//         mobile: `082134562788`,
//         password: 'Iqbal12345',
//         password1: 'Iqbal12345',
//         invitation: '0QEEG4'
//     }
// })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

//Metode Pintasan seperti axios.get():
// axios.get(getData)

//Mengambil Gambar dari URL
//membuat config
// const config = {
//     method: 'GET',
//     url: 'https://bit.ly/2mTM3nY',
//     responseType: 'stream'
// };

// //request ke api
// axios(config)
//     .then((response) => {
//         //membuat berkas untuk menyimpan gambar
//         const writeStream = fs.createWriteStream('test.jpg');
//         response.data.pipe(writeStream);

//         //menghandle dari request api
//         writeStream.on('Finish', () => {
//             console.log('Download succesfully..')
//         });

//         writeStream.on('error', (error) => {
//             console.error(`Terdapat kesalahan, download not succes`, error)
//         });
//     })

//     .catch((error) => {
//         console.error(error)
//     })






