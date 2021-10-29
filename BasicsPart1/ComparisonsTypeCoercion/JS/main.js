//an example of outputting the type of data of interest
document.write(typeof "Xi Jinping")

//an example of how JavaScript uses type coercion to force a data's type to change to accomodate another data's type
document.write("10"+5+"seven")

document.write(isNaN(3430))
document.write(isNaN('hello'))

//this should display NaN
document.write(0/0)

document.write(1E309)
document.write(-1E309)

//boolean tests
document.write('begin boolean operators')
document.write(10>2)
document.write(2>10)

console.log(5+7)

//a joke
document.write('   What did the number ' + 5 + ' say to the number ' + 'seven' + '?  ')
document.write('I have been coereced to another data type in the previous question--a string!   ')

document.write(5==3)
document.write(3==3)

//the '===' operator is used to check if both the value and type are equal
x=3
y=3
document.write(x===y)

x=3
y="3"
document.write(x===y)

x=3
y=4
document.write(x===y)

x=3
y="4"
document.write(x===y)

//interestingly, the use of the '==' operator below returns true since 'y' was coereced to data of type float
x=3
y='3'
document.write(x===y)

document.write(8>2 && 9>7)
document.write(8>2 && 5>7)
document.write(8>2 || 9>7)
document.write(8>2 || 2>7)
document.write(8<2 || 9<7)

document.write(8!=2)
document.write(8!=8)

