// Задание 1

function parseCount(value) {
    parseValue = Number.parseInt(value);
    if(isNaN(parseValue)){
        throw new Error('Невалидное значение');
    } 
    return parseValue;
}



function validateCount(value){
    try{
        return parseCount(value);
    } catch (error){
        return error;
    }
}


// Задание 2


class Triangle {
    constructor (a, b, c){
        if((a + b) < c || (a + c) < b || (c + b) < a){
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        let p = this.getPerimeter()/2;
        return Number(Math. sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c);
    } catch (error){
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        }
    }
}






