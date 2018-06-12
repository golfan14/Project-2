Drop database if exists body_book;
Create database body_book;
Use body_book;

Create table appointments (
    id Integer(10) Not Null Auto_Increment,
    type String(20),
    reason String(40),
    date 
)