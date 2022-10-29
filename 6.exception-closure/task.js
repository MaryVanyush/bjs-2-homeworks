// Задание 2

function parseCount(value) {
    if(isNaN(Number.parseInt(value))){
        throw new Error('Невалидное значение');
    } 
    return Number.parseInt(value);
}



function validateCount(value){
    try{
        return parseCount(value);
    } catch (error){
        console.log(error);
    } finally {
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
        let p = (this.a + this.b + this.c)/2;
        return Number(Math. sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c){
    setTimeout(() => {
        try{
            return new Triangle(a, b, c);
        } catch (error){
            throw error;
        } 
    }, 5000)
    
}




