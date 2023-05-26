## Numerical Computing Matlab Questions
This repository includes matlab questions and their answers of Linear Algebra and Geometry course in Politecnico di Torino. 

We solved questions from portale of Polito and we tried to simplify the questions as much as possible with our explanations. 

The course subjects divided into 7 sub-subjects in portale. 

### Subjects

[Syntax - Level 1 (W2)](#syntax---level-1-w2)

[Sytanx - Level 2 (W2)](#syntax---level-2-w2)

[Machine Arithmetic (W2)](#machine-arithmetic-w2)

[Interpolation (W5)](#interpolation-w5)

[Linear Systems - 1 (W9)](#linear-systems---1-w9)

[Linear Systems - 2 (W9)](#linear-systems---2-w9)

[Eigenvalues and matrix factorizations (W14)](#eigenvalues-and-matrix-factorizations-w14)

There are also 4 summarizing tests whose questions are more indicative of the types that will be used during the final test in the lab. Several topics are addressed in each quiz.

[Quiz 0 (W5)](#quiz-0-w5)

[Quiz 1 (W9)](#quiz-1-w9)

[Quiz 2 (W10)](#quiz-2-w10)

[Quiz 3 (W14)](#quiz-3-w14)

A note from Professor; 
1. Questions should **not be considered exhaustive of the course program**. Moreover, some questions are proposed with a high level of heterogeneity in terms of complexity.
2. The scores assigned during these quizzes are not related to the difficulty of the question.
3. Use the online help to understand the use of MATLAB commands that you have never dealt with.
4. You may repeat the quiz several times; typically new questions will be delivered.
5. The due time is not related to question number and/or complexity, and it is not related to the time you will be assigned for completing the quiz during the exam.
6. The different number of alternatives (4 in some cases, 5 in other ones) is not significant. The questions of the final test will have 5 alternatives.
7. For each quiz, we provide a qualitative indication of the course week in which the treatment of the topics is approximately completed so that you should be able to answer all questions in the quiz (for example W1 -> starting from week one; W4 -> starting from week four, and so on).

## Syntax - Level 1 (W2)
![](questions/1.jpeg)

In this question we were asked to calculate the exact this 

```
% case 1
x1=1.7;
S1=2.1*10^-9;
y1=sqrt(x1+S1) - sqrt(x1);
y2=S1/sqrt(x1+S1) + sqrt(x1);
err1 = abs(y1-y2)/ abs(y2)

% case 2
x2=31000;
S2=7.1*10^-4;
y3=sqrt(x2+S2) - sqrt(x2);
y4=S2/sqrt(x2+S2) + sqrt(x2);

err2 = abs(y3-y4)/ abs(y4);

x1=2; 

```

## Syntax - Level 2 (W2)
## Machine Arithmetic (W2)

```
% numerical cancellation
x= 10^-6;
y= 1 - sqrt(1+x.^2);
y_= (-x.^2)/(1+sqrt(1+x.^2));
error=(abs(y-y_))/(abs(y));
```
```
% machine working with base N=2, t=3, -2<=q<=3 rounding to even tech. How
% many strictly positive machine numbers exist?
N=2;
t=3;
U=3;
L=-2;
resx = (N-1)*(N.^(t-1))*((U-L)+1);
```
```
% type (?)
x(1) = 2;
for n = 2:40
    x(n) = 2.^(n-1/2) .* sqrt(1-sqrt(1-(4.^(1-n) .* x(n-1).^2)));
end
min(abs(x-pi))/pi;  % converging to pi
                    % y2 = pi in relative error
```
```
% type 3
x1 = 1.7;
d1 = 2.1 * 10 ^ -9;
x2 = 31000;
d2 = 7.1 * 10 ^ -4;

f = @(x,d) sqrt(x+d) - sqrt(x);
fn = @(x,d) d/(sqrt(x+d)+sqrt(x));

abs(f(x1,d1)-fn(x1,d1))/abs(fn(x1,d1));
abs(f(x2,d2)-fn(x2,d2))/abs(fn(x2,d2));
```
```
% relative error
x = 10^-6;
f1 =@(x) 1-sqrt(1+x.^2);              % ilk verilen y fonsiyonu
y1= f1(x);

f2 = @(x) -x.^2 / (1+ sqrt(1+x.^2));  % ilk verilen y fonsiyonunun eslenigiyle 
y2 = f2(x);
err= abs(y1-y2)/ abs(y2);             % basic rel. error
```
```
% relative with abs value strictly larger than 1
N=2;
t=2;
U=2;
L=0;
res = (N-1)*(N.^(t-1))*((U-L)+1);
```
```
% unknown
for n=1:14
    L(n) = (1-cos(10^-n))./(10^-n)^2;
end

[min,index] = min(abs(L-1/2));
```


## Interpolation (W5)

```
% interpolation Chebyshev type
f = @(x) sqrt(1+x.^2);
a = 0;                  % interval start
b = 5;                  % interval end
n = 4;                  % nodes (n-1)

for i = 1:n+1
    t(i) = -cos((((2.*i)-1)*pi)./(2*(n+1)));
    x(i) = (((b-a)/2).* t(i)) + ((b+a)/2);
end

y = f(x);
c = polyfit(x,y,n);
```
```
% five interpolation nodes
x = [0.0 0.5 1.0 1.5 2.0];                  % x degerlerini verildigi gibi yazdik
f =@(x) (sin(x) - (x+1).^2)./((x.^2)+3);    %fonksiyonu da ayni sekilde
y=f(x);
z=1.97;
spline(x,y,z);
```
```
% not-a-knot cubic spline
x = [-1 1 7 9 19];
y = [4 3 10 10 9];
z = log(0.9);

spline(x,y,z);

```
```
% coefficent of the second order term

n=4;                % x,y eleman sayisi

x = [1,2,3,4];
y = [1,-1,1,-1];

polyfit(x,y,n-1);
```
```
% cubic spline interpolating takes the value
x = [-5 4 5 11];
y = [6 2 4 10];
z = sqrt(1.8);

y0 = 10;
yn = 4;

spline(x, [y0,y,yn], z);
```
```
% couples higher degree interpolating the data
n=5;

x = [3 6 7 14 21];
y = [8 4 5 5 7];
z= exp(0.7);

c = polyfit(x, y , n-1);
polyval(c,z);
```


## Linear Systems - 1 (W9)
## Linear Systems - 2 (W9)
## Eigenvalues and Matrix Factorizations (W14)

## Quiz 0 (W5)
## Quiz 1 (W9)
## Quiz 2 (W10)
## Quiz 3 (W14)
