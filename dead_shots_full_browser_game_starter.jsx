export default function DeadShotsGameStarter() {
  const weapons = [
    {
      name: "VX Phantom",
      type: "Assault Rifle",
      damage: 42,
    },
    {
      name: "Shadow SMG",
      type: "SMG",
      damage: 29,
    },
    {
      name: "Night Sniper",
      type: "Sniper",
      damage: 95,
    },
  ];

  const skins = [
    "Obsidian Knight",
    "Blackout X",
    "Shadow Reaper",
    "Dark Venom",
  ];

  const modes = [
    "Battle Royale",
    "5v5 Ranked",
    "Training Arena",
    "Sniper Only",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Hero />

      <LauncherSection />

      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black uppercase mb-8">
          Matchmaking Menu
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {modes.map((mode, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-[30px] p-6 hover:border-white transition"
            >
              <div className="h-44 rounded-2xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-black" />

              <h3 className="text-2xl font-black mt-5">{mode}</h3>

              <button className="mt-5 w-full bg-white text-black py-3 rounded-2xl font-bold hover:scale-105 transition">
                Queue Match
              </button>
            </div>
          ))}
        </div>
      </section>

      <BattleRoyaleMap />

      <WeaponSystem weapons={weapons} />

      <SkinShop skins={skins} />

      <BrowserShooter />

      <CharacterDesigns />

      <LoadingScreens />

      <SoundIdeas />

      <DesktopAndMobile />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative px-6 py-24 text-center bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_45%)]" />

      <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tight">
        Shadow Shots
      </h1>

      <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-xl leading-relaxed">
        A futuristic black-themed online shooter for laptops, desktop, and
        mobile devices.
      </p>

      <div className="mt-12 flex gap-4 justify-center flex-wrap">
        <button className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition">
          Play Free
        </button>

        <button className="border border-zinc-700 px-8 py-4 rounded-2xl font-black hover:bg-zinc-900 transition">
          Download Launcher
        </button>
      </div>
    </section>
  );
}

function LauncherSection() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-black uppercase">
            Game Launcher
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            The launcher installs updates, lets players log in, queue for
            matches, and customize skins.
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-black border border-zinc-800 rounded-2xl p-4">
              Auto Updates
            </div>

            <div className="bg-black border border-zinc-800 rounded-2xl p-4">
              Friend System
            </div>

            <div className="bg-black border border-zinc-800 rounded-2xl p-4">
              Ranked Matchmaking
            </div>
          </div>
        </div>

        <div className="bg-black border border-zinc-800 rounded-[30px] p-6">
          <div className="rounded-3xl border border-zinc-700 p-6 bg-zinc-950">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-black uppercase">Launcher</h3>

              <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
            </div>

            <div className="h-5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-white rounded-full" />
            </div>

            <button className="mt-8 w-full bg-white text-black py-4 rounded-2xl font-black">
              Launch Game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BattleRoyaleMap() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black uppercase mb-8">
        Battle Royale Map UI
      </h2>

      <div className="relative aspect-video rounded-[40px] overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-700 via-black to-zinc-950">
        <div className="absolute top-10 left-10 w-44 h-44 rounded-full border-4 border-white opacity-70" />

        <div className="absolute bottom-12 right-12 bg-black/70 backdrop-blur-xl border border-zinc-700 rounded-3xl p-6 w-72">
          <h3 className="text-2xl font-black uppercase">Safe Zone</h3>

          <p className="text-zinc-400 mt-3">
            Storm closes in 00:45
          </p>

          <button className="mt-5 w-full bg-white text-black py-3 rounded-2xl font-bold">
            Deploy
          </button>
        </div>
      </div>
    </section>
  );
}

function WeaponSystem({ weapons }) {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black uppercase mb-8">
        Weapon System
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {weapons.map((weapon, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-[30px] p-6"
          >
            <div className="h-48 rounded-3xl bg-gradient-to-r from-zinc-700 to-black border border-zinc-700" />

            <h3 className="text-3xl font-black mt-5">{weapon.name}</h3>

            <p className="text-zinc-400 mt-2">{weapon.type}</p>

            <div className="mt-5 bg-black border border-zinc-800 rounded-2xl p-4 flex justify-between">
              <span>Damage</span>
              <span>{weapon.damage}</span>
            </div>

            <button className="mt-5 w-full bg-white text-black py-3 rounded-2xl font-bold">
              Equip
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkinShop({ skins }) {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black uppercase mb-8">
        Free Skin Shop
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {skins.map((skin, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-5 hover:border-white transition"
          >
            <div className="h-56 rounded-3xl bg-gradient-to-b from-zinc-700 to-black" />

            <h3 className="mt-5 text-2xl font-black">{skin}</h3>

            <p className="text-zinc-400 mt-2">Legendary Black Skin</p>

            <button className="mt-5 w-full bg-white text-black py-3 rounded-2xl font-bold">
              Claim Free
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function BrowserShooter() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black uppercase mb-8">
        Playable Browser Shooter Prototype
      </h2>

      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-8">
        <div className="aspect-video rounded-[30px] bg-black border border-zinc-700 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center text-5xl">
              +
            </div>
          </div>

          <div className="absolute top-6 left-6 bg-black/70 border border-zinc-700 px-4 py-2 rounded-2xl">
            HP: 100
          </div>

          <div className="absolute top-6 right-6 bg-black/70 border border-zinc-700 px-4 py-2 rounded-2xl">
            Ammo: 30
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 border border-zinc-700 px-6 py-3 rounded-2xl">
            VX Phantom Equipped
          </div>
        </div>

        <div className="mt-8 bg-black border border-zinc-800 rounded-3xl p-6 leading-relaxed text-zinc-400">
          <p>
            To make this fully playable, connect this UI to a 3D engine like
            Three.js or Unity WebGL.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
              WASD Movement
            </div>

            <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
              Mouse Aim
            </div>

            <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
              Online Multiplayer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CharacterDesigns() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black uppercase mb-8">
        Character Designs
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-6"
          >
            <div className="h-[500px] rounded-[30px] bg-gradient-to-b from-zinc-700 to-black" />

            <h3 className="text-3xl font-black mt-6">
              Shadow Agent {item}
            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Tactical futuristic soldier wearing black armored streetwear with
              glowing silver details.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LoadingScreens() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black uppercase mb-8">
        Loading Screens
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="aspect-video rounded-[40px] overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-800 via-black to-zinc-950 relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
              <h3 className="text-5xl font-black uppercase">
                Shadow Shots
              </h3>

              <p className="text-zinc-400 mt-4 max-w-xl">
                Entering Blackout City...
              </p>

              <div className="w-full max-w-md mt-10 h-4 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SoundIdeas() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10">
        <h2 className="text-5xl font-black uppercase mb-8">
          Sound Design Ideas
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-3xl font-black">Menu Music</h3>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              Dark futuristic beats with bass-heavy cyberpunk sounds.
            </p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-3xl font-black">Gun Sounds</h3>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              Heavy realistic echoes mixed with sci-fi effects.
            </p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-3xl font-black">Lobby Ambience</h3>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              Low ambient drones and futuristic city sounds.
            </p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-3xl font-black">Victory Theme</h3>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              Aggressive cinematic electronic music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopAndMobile() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto pb-24">
      <h2 className="text-5xl font-black uppercase mb-8">
        Desktop + Mobile Versions
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-8">
          <div className="aspect-video rounded-3xl bg-gradient-to-br from-zinc-700 to-black border border-zinc-700" />

          <h3 className="text-4xl font-black mt-6">Desktop Version</h3>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            Full graphics, keyboard controls, ranked competitive gameplay, and
            advanced settings.
          </p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-8">
          <div className="aspect-[9/16] max-w-xs mx-auto rounded-3xl bg-gradient-to-br from-zinc-700 to-black border border-zinc-700" />

          <h3 className="text-4xl font-black mt-6">Mobile Version</h3>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            Touchscreen controls, optimized graphics, and cross-platform online
            matches.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-black border border-zinc-800 rounded-[40px] p-10">
        <h2 className="text-5xl font-black uppercase">
          Step-by-Step To Turn This Into A Real Game
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {[
            'Install Node.js',
            'Create React app with Vite',
            'Paste this code into App.jsx',
            'Run npm install',
            'Run npm run dev',
            'Build 3D gameplay using Three.js or Unity',
            'Add Firebase login system',
            'Connect multiplayer servers',
            'Publish using Vercel',
            'Submit website to Google',
          ].map((step, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5"
            >
              <span className="text-white font-black mr-3">
                {index + 1}.
              </span>
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
