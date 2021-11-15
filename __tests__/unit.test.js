// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber(phoneNumber)', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber(phoneNumber)', () => {
    expect(functions.isPhoneNumber('321-654-0987')).toBe(true);
});
test('isPhoneNumber(phoneNumber)', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});
test('isPhoneNumber(phoneNumber)', () => {
    expect(functions.isPhoneNumber('321')).toBe(false);
});

test('isEmail(email)', () => {
    expect(functions.isEmail('dohuang@ucsd.edu')).toBe(true);
});
test('isEmail(email)', () => {
    expect(functions.isEmail('dohuang@gmail.com')).toBe(true);
});
test('isEmail(email)', () => {
    expect(functions.isEmail('dohuangucsdedu')).toBe(false);
});
test('isEmail(email)', () => {
    expect(functions.isEmail('dohuanggmailcom')).toBe(false);
});

test('isStrongPassword(password)', () => {
    expect(functions.isStrongPassword('qwe123')).toBe(true);
});
test('isStrongPassword(password)', () => {
    expect(functions.isStrongPassword('asd456')).toBe(true);
});
test('isStrongPassword(password)', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});
test('isStrongPassword(password)', () => {
    expect(functions.isStrongPassword('456')).toBe(false);
});

test('isDate(date)', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});
test('isDate(date)', () => {
    expect(functions.isDate('11/15/2021')).toBe(true);
});
test('isDate(date)', () => {
    expect(functions.isDate('111/14/2021')).toBe(false);
});
test('isDate(date)', () => {
    expect(functions.isDate('13.14.2021')).toBe(false);
});

test('isHexColor(color)', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('isHexColor(color)', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});
test('isHexColor(color)', () => {
    expect(functions.isHexColor('#0000000')).toBe(false);
});
test('isHexColor(color)', () => {
    expect(functions.isHexColor('#fffffff')).toBe(false);
});