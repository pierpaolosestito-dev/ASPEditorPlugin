object(A,10,10).
object(B,10,5).
object(C,10,7).
object(D,10,5).
object(E,10,5).

capacity (20).

in(X)|out(X) :- object(X,_,_).
:- capacity(C), not #sum{Y,X : object(X,Y,_), in(X)} <= C.
:~ out(X),object(X,_,Y). [Y@1,X]