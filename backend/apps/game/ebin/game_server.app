{application,game_server_app,
             [{description,[]},
              {vsn,"1"},
              {registered,[game_server_sup]},
              {applications,[kernel,stdlib,lager,gproc]},
              {mod,{game_server_app,[]}},
              {env,[]},
              {modules,[game_server,game_server_app,game_server_sup]}]}.
