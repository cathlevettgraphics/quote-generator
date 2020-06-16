let data = [
      { quote: `Frankly, my dear, I don't give a damn.`, film: `Gone with the Wind`},
      { quote: `I'm gonna make him an offer he can't refuse.`, film: `The Godfather`},
      { quote: `Toto, I've a feeling we're not in Kansas anymore.`, film: `The Wizard of Oz`},
      { quote: `Here's looking at you, kid.`, film: `Casablanca`},
      { quote: `Go ahead, make my day.`, film: `Sudden Impact`},
      { quote: `All right, Mr. DeMille, I'm ready for my close-up.`, film:`Sunset Boulevard`},
      { quote: `May the Force be with you.`, film: `Star Wars`},
      { quote: `Fasten your seatbelts. It's going to be a bumpy night.`, film: `All About Eve`},
      { quote: `You talkin' to me?`, film: `Taxi Driver`},
      { quote: `What we've got here is failure to communicate.`, film: `Cool Hand Luke`},
      { quote: `I love the smell of napalm in the morning.`, film: `Apocalypse Now`},
      { quote: `Love means never having to say you're sorry.`, film: `Love Story`},
      { quote: `The stuff that dreams are made of.`, film: `The Maltese Falcon`},
      { quote: `E.T. phone home.`, film: `E.T. the Extra-Terrestrial`},
      { quote: `They call me Mister Tibbs!`, film: `In the Heat of the Night`},
      { quote: `Rosebud.`, film: `Citizen Kane`},
      { quote: `Made it, Ma! Top of the world!`, film: `White Heat`},
      { quote: `I'm as mad as hell, and I'm not going to take this anymore!`, film: `Network`},
      { quote: `Louis, I think this is the beginning of a beautiful friendship.`, film: `Casablanca`},
      { quote: `A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.`, film: `The Silence of the Lambs`},
      { quote: `Bond. James Bond.`, film: `Dr.No`},
      { quote: `I am big! It's the pictures that got small.`, film: `Sunset Boulevard`},
      { quote: `Show me the money!` , film: `Jerry Maguire`},
      { quote: `Why don\'t you come up sometime and see me?`, film: `She Done Him Wrong`},
      { quote: `I'm walking here! I'm walking here!`, film: `Midnight Cowboy`},
      { quote: `You can't handle the truth!`, film: `A Few Good Men`},
      { quote: `I want to be alone.`, film: `Grand Hotel`},
      { quote: `After all, tomorrow is another day!`, film: `Gone with the Wind`},
      { quote: `Round up the usual suspects.`, film: `Casablanca`},
      { quote: `I'll have what she's having.`, film: `When Harry Met Sally.`},
      { quote: `You know how to whistle, don't you, Steve? You just put your lips together and blow.`, film: `To Have and Have Not`},
      { quote: `You're gonna need a bigger boat.`, film: `Jaws`},
      { quote: `Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!` , film: `Gold Hat`},
      { quote: `We rob banks.`, film: `Bonnie and Clyde`},
      { quote: `Plastics.`, film: `The Graduate`},
      { quote: `We'll always have Paris.`, film: `Casablanca`},
      { quote: `I see dead people.`, film: `The Sixth Sense`},
      { quote: `Stella! Hey, Stella!` , film: `A Streetcar Named Desire`},
      { quote: `Oh, Jerry, don't let's ask for the moon.We have the stars.`, film: `Now, Voyager`},
      { quote: `Houston, we have a problem.`, film: `Apollo 13`},
      { quote: `You've got to ask yourself one question:  'Do I feel lucky?' Well, do ya, punk?` , film: `Dirty Harry`},
      { quote: `You had me at 'hello'.`, film: `Jerry Maguire`},
      { quote: `One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.`, film: `Animal Crackers`},
      { quote: `There's no crying in baseball!` , film: `A League of Their Own`},
      { quote: `La-dee-da, la-dee-da.`, film: `Annie Hall`},
      { quote: `A boy's best friend is his mother.`, film: `Psycho`},
      { quote: `Greed, for lack of a better word, is good.`, film: `Wall Street`},
      { quote: `Keep your friends close, but your enemies closer.`, film: `The Godfather Part II`},
      { quote: `As God is my witness, I'll never be hungry again.`, film: `Gone with the Wind`},
      { quote: `Well, here's another nice mess you've gotten me into!` , film: `Sons of the Desert`},
      { quote: `Say 'hello' to my little friend!` , film: `Scarface`},
      { quote: `What a dump.`, film: `Beyond the Forest`},
      { quote: `Mrs Robinson, you're trying to seduce me. Aren't you?` , film: `The Graduate`},
      { quote: `Elementary, my dear Watson.`, film: `The Adventures of Sherlock Holmes`},
      { quote: `Get your stinking paws off me, you damned dirty ape.`, film: `Planet of the Apes`},
      { quote: `Of all the gin joints in all the towns in all the world, she walks into mine.`, film: `Casablanca`},
      { quote: `Here's Johnny!` , film: `The Shining`},
      { quote: `They're here!` , film: `Poltergeist`},
      { quote: `Is it safe?` , film: `Marathon Man`},
      { quote: `Wait a minute, wait a minute. You ain't heard nothin' yet!` , film: `The Jazz Singer`},
      { quote: `No wire hangers, ever!` , film: `Mommie Dearest`},
      { quote: `Mother of mercy, is this the end of Rico?` , film: `Little Caesar`},
      { quote: `Forget it, Jake, it's Chinatown.`, film: `Chinatown`},
      { quote: `I have always depended on the kindness of strangers.`, film: `A Streetcar Named Desire`},
      { quote: `Hasta la vista, baby.`, film: `Terminator 2:  Judgment Day`},
      { quote: `Soylent Green is people!` , film: `Soylent Green`},
      { quote: `Open the pod bay doors, HAL.`, film: `2001 A Space Odyssey`},
      { quote: `Yo, Adrian!`, film: `Rocky`},
      { quote: `Hello, gorgeous.`, film: `Funny Girl`},
      { quote: `Toga! Toga!` , film: `National Lampoon's Animal House`},
      { quote: `Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.`, film: `King Kong`},
      { quote: `My precious.`, film: `The Lord of the Rings:  The Two Towers`},
      { quote: `Attica! Attica!` , film: `Dog Day Afternoon`},
      { quote: `Sawyer, you're going out a youngster, but you've got to come back a star!` , film: `42nd Street`},
      { quote: `Tell 'em to go out there with all they got and win just one for the Gipper.`, film: `Knute Rockne, All American`},
      { quote: `A martini. Shaken, not stirred.`, film: `Goldfinger`},
      { quote: `Who's on first?` , film: `The Naughty Nineties`},
      { quote: `I feel the need—the need for speed!` , film: `Top Gun`},
      { quote: `Carpe diem.Seize the day, boys. Make your lives extraordinary.`, film: `Dead Poets Society`},
      { quote: `Nobody puts Baby in a corner.`, film: `Dirty Dancing`},
      { quote: `Ill get you, my pretty, and your little dog too!`, film: `The Wizard of Oz`}
   ]
       