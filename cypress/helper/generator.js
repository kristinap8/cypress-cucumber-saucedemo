import { faker } from '@faker-js/faker';

export function randomPassword() {
    return faker.internet.password();
}

export function randomIndex() {
    return faker.number.int({ min: 0, max: 5 });
}

export function randomIndexes() {
    return faker.helpers.arrayElements([0, 1, 2, 3, 4, 5], faker.number.int({ min: 2, max: 6 })).sort().reverse();
}

export function randomFirstName() {
    return faker.person.firstName();
}

export function randomLastName() {
    return faker.person.lastName();
}

export function randomPostalCode() {
    return faker.location.zipCode();
}