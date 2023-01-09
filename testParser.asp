%**
    @test(name = "test_01",
    scope = {"block01"},
    input = "b(1). c(1). b(2). c(3).",
    assert = {
    @isAnswerSet (set = "b(1). c(1). b(2). c(3). a(1). a(3).")
    }
**%
%/ 
    HAMILTON PATH
    ------------------------------------------------------------------------------------
    A directed graph represented by node(_) and arc(_,_),and a starting node start(_).
    Find a path beginning at the starting node which contains all nodes of the graph. 
/%

start(0).
node(1). node(2). node(3). node(4).
arc(0,1). arc(0,2). arc(0,3). arc(1,2,). arc(2,1).
arc(1,4). arc(4,1). arc(2,4). arc(4,2). arc(2,3).
arc(3,2,).

inPath(X,Y) | outPath(X,Y) :- arc(X,Y).

reached(X) :- start(X)
reached(X) :- reached(Y), inPath(Y,X).

% regole non safe
s(X) :- body.
s(Y) :- b(X), not r(X).
s(Y) :- b(X), X<Y.

- inPath(X,Y), inPath(X,Y1), Y <> Y1.
:- inPath(X,Y), inPath(X1,Y), X <> X1. 
:- node(X), not reached(X).
:- inPath(X,Y), start(Y).


commonStudents(1,2,3).
:~ assign(X,S), assign(Y,S), commonStudents(X,Y,N), N>0. [1@1,X]
