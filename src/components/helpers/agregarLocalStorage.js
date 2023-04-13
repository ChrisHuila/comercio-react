
export const localStorageInicial = () => {
    let productosIniciales = JSON.parse(localStorage.getItem('productos'));
        if(!productosIniciales){
        productosIniciales = [];
    }

    // Muestra las notificacion de localStorage
    let notificacionesIniciales = JSON.parse(localStorage.getItem('notificaciones'));
        if(!notificacionesIniciales){
        notificacionesIniciales = 1; // se agrega 1 para que la variable pueda existir
    }

    // Muestra el valor total de localStorage
    let valorTotalInicial = JSON.parse(localStorage.getItem('valortotal'));
        if(!valorTotalInicial){
        valorTotalInicial = 1; // se agrega 1 para que la variable pueda existir
    }
    const storageInicial = {
        productosIniciales,
        notificacionesIniciales,
        valorTotalInicial
    }
    return storageInicial
}


export const agregaCarritoStorage = carrito => {
    localStorage.setItem('productos', JSON.stringify(carrito));
}

export const agregarNotificacionStorage = notificacion => {
    localStorage.setItem('notificaciones', JSON.stringify(notificacion))
}

export const agregarValorTotalStorage = valortotal => {
    localStorage.setItem('valortotal', JSON.stringify(valortotal))
}