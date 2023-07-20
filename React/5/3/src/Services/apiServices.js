import axios from "axios";

const baseURL = 'http://owu.linkpc.net/carsAPI/v1/cars';
export const apiServices = {
     getCars: () => axios.get(baseURL),
     postCar: (car) => axios.post(baseURL, car),
     deleteCar: (id) => axios.delete(`${baseURL}/${id}`),
     updateCar: (car) => axios.put(`${baseURL}/${car.id}`, car)
}