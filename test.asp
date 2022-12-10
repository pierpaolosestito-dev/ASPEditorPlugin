col(X, red) | col(X, blue) | col(X, green) :- node(X).
:- edge(X, Y), col(X,C), col(Y,C).
