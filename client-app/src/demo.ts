export interface Dock {
    name: string,
    numLegs: 2,
    makeSound: (sound: string) => void
};

const dock1 : Dock = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
};

const dock2 : Dock = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
};

dock1.makeSound('quack')

export const docks = [dock1, dock2];