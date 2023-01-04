ciao(1,2).
%/ ciao(1,2) /%

start(0).
node(1). node(2). node(3). node(4).
arc(0,1). arc(0,2). arc(0,3). arc(1,2,). arc(2,1).
arc(1,4). arc(4,1). arc(2,4). arc(4,2). arc(2,3).
arc(3,2,).

inPath(X,Y) | outPath(X,Y) :- arc(X,Y).

reached(X) :- start(X)
reached(X) :- reached(Y), inPath(Y,X).

s(X) :- body.
s(Y) :- b(X), not r(X).
s(Y) :- b(X), X<Y.

:- inPath(X,Y), inPath(X,Y1), Y <> Y1.
:- inPath(X,Y), inPath(X1,Y), X <> X1. 
:- node(X), not reached(X).
:- inPath(X,Y), start(Y).