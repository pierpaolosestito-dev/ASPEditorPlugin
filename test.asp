col(X, red) | col(X, blue) | col(X, green) :- node(X).
:- edge(X, Y), col(X,C), col(Y,C).

%** @block(name = "block01) **%
%** @rule(name = "R1", block = "block01") **%
a(X) :- b(X), c(X).
%** @rule(name = "R2", block = "block01") **%
b(X) :- c(X).
c(X) :- b(X).
%**
@test(name = "test_01",
scope = {"block01"},
input = "b(1). c(1). b(2). c(3).",
assert = {
@isAnswerSet (set = "b(1). c(1). b(2). c(3). a(1). a(3).")
}
**%