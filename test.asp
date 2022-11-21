% commento

Prova :- prova(X,Y).

:~Prova

&ciao().

&Ciao().

&head().

#count

#show

% 3-colorabilità con Guess-and-check

col(X,red)|col(X,green)|col(X,blue):-state(X).
:-border(X,Y),col(X,C),col(Y,C).