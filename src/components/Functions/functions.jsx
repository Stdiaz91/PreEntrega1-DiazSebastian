import data from '../../data/products';

export const requestProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};

export const RequestItemForId = (id) =>{
    return new Promise((resolve, reject) => {
        const item = data.find((e)=> e.id === id);

        if (item){
            resolve(item);
        } else{
            reject({
                error: "No se encuentra el producto"
            });
        };

    });
};

export function toCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
