function parseCount(figure, base = 10) {
    const parsed = parseInt(figure, base);
    if (isNaN(parsed)) {
        throw new Error ("Невалидное значение");
    }
    return parsed;
}

function validateCount(figure, base = 10) {
    try {
        return parseCount(figure, base);
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor (a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c; 
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Number(((p * (p - this.a) * (p - this.b) * (p - this.c)) ** (1 / 2)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return triangle = {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует'; 
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}