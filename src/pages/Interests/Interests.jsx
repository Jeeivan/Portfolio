import Tennis from "../../images/tennis.jpeg";
import Gaming from "../../images/gaming.JPG";
import Naruto from "../../images/naruto.jpeg";
import Guitar from "../../images/guitar.jpg";
import Football from "../../images/football.jpeg";

export default function Interests() {
  return (
    <div className="Interests">
      <h1>Get to know me more!</h1>

      <div>
        <h4>Guitar</h4>
        <img src={Guitar} alt="Guitar" />
        <p>
          Since the age of 10, I've been self-taught in playing the guitar, a
          skill I continue to nurture and find joy in. One of my proudest
          moments was performing for the first time in front of a live audience
          at a Tamil event, captivating hundreds of people.
        </p>
      </div>

      <div>
        <h4>Gaming</h4>
        <img src={Gaming} alt="Gaming" />
        <p>
          My gaming journey began with the Gameboy Advance at the age of 5,
          sparking a love for Pokemon games. My passion evolved with the
          PlayStation 3 and Call of Duty 4, leading to a consistent pursuit of
          improvement. In a recent Call of Duty, I achieved a top-200 ranking
          among millions of players.
        </p>
      </div>

      <div>
        <h4>Football</h4>
        <img src={Football} alt="Football" />
        <p>
          As the youngest of three brothers, I often played the role of
          goalkeeper in our childhood football matches. Over time, I honed my
          skills, becoming a reliable goalkeeper. Often, when playing casually,
          opponents find it challenging to score against me, adding an extra
          layer of competition and enjoyment to the game. I now play casually at
          least once a week and participate in summer tournaments with a team.
        </p>
      </div>

      <div>
        <h4>Anime</h4>
        <img src={Naruto} alt="Anime" />
        <p>
          Introduced to Naruto at a young age, I was captivated not only by the
          animation but also by the intricate storytelling in anime. Since then,
          I've explored a variety of mainstream shonen anime, appreciating the
          depth and complexity they offer.
        </p>
      </div>

      <div>
        <h4>Tennis</h4>
        <img src={Tennis} alt="Tennis" />
        <p>
          While tennis used to be an occasional TV sport for me, I delved into
          it this year, starting with casual games in the park. The passion to
          constantly improve led me to solo practice sessions and eventually
          joining a local club. Now, I regularly attend sessions and compete in
          the local league.
        </p>
      </div>
    </div>
  );
}
