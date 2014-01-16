PROJECT = tanks

REBAR = ./rebar

all: clean get-deps compile

update-deps:
	@$(REBAR) update-deps

get-deps:
	@$(REBAR) get-deps

clean:
	@$(REBAR) clean

cleanrel:
	@$(RM) -rf _rel/

compile:
	@$(REBAR) compile

cleanapp:
	@($(REBAR) clean skip_deps=true)

compileapp: cleanapp
	@($(REBAR) compile skip_deps=true)

run: compileapp
	@(erl -config $(CURDIR)/sys -pa apps/*/ebin deps/*/ebin -boot start_sasl -s $(PROJECT))

.PHONY: rel
