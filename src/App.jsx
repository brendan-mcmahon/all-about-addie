import { AboutBlock } from "./AboutBlock";
import { Tip } from "./Tip";
import "./App.scss";
import "./Clay.scss";

function App() {
  return (
    <div className="App">
      <div className="about-container">
        <h1>
          All about <span className="cursive">Addie</span>
        </h1>
        <div className="about">
          <AboutBlock>
            Addie is a wonderfully unique kid with a great sense of humor and a kind heart. She loves arts & crafts,
            fashion & makeup, and dancing. However - sometimes at school, parties, or when meeting someone new, she feels
            nervous and may not be able to speak.
          </AboutBlock>
          <AboutBlock>
            Addie has Selective Mutism, a social anxiety condition that may cause her to become anxious and mute in social
            settings. Addie can and will speak, when, where, and how she feels comfortable.
          </AboutBlock>
          <AboutBlock>
            Please remember that there are many forms of communication Addie may need to utilize- including head nods,
            pointing, drawing pictures, or writing. Each of these avenues allow Addie to feel more comfortable and
            progress into speech over time. Addie often is able to use trusted friends/family as &quot;verbal
            intermediaries&quot; or &quot;whisper buddies&quot; to communicate.
          </AboutBlock>
        </div>
      </div>

      <div className="tips-container">
        <h2 className="break">Here are a few tips to help Addie feel more comfortable:</h2>
        <div className="tips">
          <ul className="tip-list">
            <Tip title="Wave hello!" alignment="right" icon="wave">
              A simple hello or wave is the best way to greet her! Avoid making a scene or drawing the room&apos;s
              attention.
            </Tip>
            <Tip title="Save Addie for last!" alignment="left" icon="queue">
              Saying hello to others in the room first is a great way to allow Addie more time to prepare for your
              interaction.
            </Tip>
            <Tip title="Ask about her interests" alignment="right" icon="ballerina">
              Try to identify with her interests. Ask about her drawings, dance class, school, or her many cousins!
            </Tip>
            <Tip title="No tricks!" alignment="left" icon="trick">
              Never try to trick Addie into speaking or draw attention to her speaking. If you hear her speak, that means
              she is comfortable using her voice in that moment. <br /> Her comfort level can fluctuate based on many factors
              including who is around, location, circumstances of the day, etc. Please respect her comfort level and meet
              her needs in the current situation, even if you have heard her voice on a different occasion.
            </Tip>
            <Tip title="Yes or no?" alignment="right" icon="voting">
              Direct choice & Yes/No questions are easier to respond to than open-ended questions. If Addie does not
              initially respond to you, she may need additional time to process. It may help to ask Addie if she needs you
              to reword or repeat yourself.
            </Tip>
            <Tip title="Don't make eye contact" alignment="left" icon="eye">
              Direct eye contact can increase Addie&apos;s anxiety. We find she is more comfortable when able to focus on
              an object with others as opposed to looking directly at who she is speaking to.
            </Tip>
          </ul>
        </div>
      </div>
      <div className="footer">
        <p>
          Thank you for taking the time to read this! Addie is working hard to manage her anxiety & Selective Mutism.
          Patience and support from those she interacts with is very appreciated!
        </p>
        <p>
          If you&apos;re interested in learning more about Selective Mutism, visit{" "}
          <a href="https://selectivemutismcenter.org/whatisselectivemutism/">the SMart Center</a>
        </p>
      </div>
    </div>
  );
}

export default App;
