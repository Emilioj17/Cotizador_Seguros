import React from 'react';

export const CalcularTotal = (marca, year, plan) => {
    let total = 0;
    //Calculando Total por Marca
    if (marca === "Europeo") {
        total = 2300;
    } else if (marca === "Americano") {
        total = 2150;
    } else if (marca === "Asiatico") {
        total = 2000;
    } else {
        total = total;
    }
    //Calculando Total por Año
    let factor = 2021 - year;
    if (factor == 0) {
        total = total;
    } else if (factor > 0) {
        total = total*(1+(factor/100))
    }
    //Calculando Total por Plan
    if (plan === "Avanzado") {
        total = total * 1.2;
    } else if (plan === "Básico") {
        total = total * 1.1;
    } else {
        total = total;
    }

    return (total);

}