%** @block(name = "block01) **%

%**
@test(name = "test_01",
scope = {"block01"},
input = "b(1). c(1). b(2). c(3).",
assert = {
@isAnswerSet (set = "b(1). c(1). b(2). c(3). a(1). a(3).")
}
**%