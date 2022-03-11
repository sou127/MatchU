import React from 'react'
import './LandingPage.css'
import Main from '../../assets/MainVisual2.png'
import test from '../../assets/screenshot.png'
import survey from '../../assets/survey2.png'
import MEETING from '../../assets/remote_meeting.svg'
import MATCH from '../../assets/positive_attitude.svg'
import SCHEDULE from '../../assets/landcalendar.svg'
import DEVICES from '../../assets/devices.svg'

export default function LandingPage() {
  return (
    <div className='land-container'>
      <section className='mainvisual'>  
        <img src={Main} alt="メイン画像" /> {/*Main: 画像名, alt: 実際に表示される名前 */}
        {/* <h2 className='landh2'>MatchさせるWeb App</h2> */}
      </section>

      <section className="about">
        <h2 className='landh2'>ABOUT</h2>
        <p>
          コロナ禍でも、誰かと一緒に勉強したい...<br />
          MatchUは、そんなあなたの願いを叶えるために開発されました<br />
          {/* 同じ目標の仲間を探し，ともに高め合っていきましょう！<br /> */}
        </p>
      </section>

      <section className="image">
          <p>
            <img src={test} alt="test" align="middle"></img> {/*alignで文字の位置を指定 */}
            <span class="yohaku"></span><b>いつでも、どこでも、誰とでも</b> <br />
          </p> 
      </section>

      <section className='survey'>
        <div className='caption'>
        <p>
        あなたの知識を新しい分野に広げる際、それを妨げるものとは何でしょうか。<br/>
        「時間がない」「勉強仲間がいない」「やる気が続かない」etc...<br/>
        私たちはこれを解決する、画期的なサービスを開発しました。<br/><br/>
        MatchUは、世界中の仲間たちとあなたを繋げて、あなたの新しい分野に対する挑戦をサポートします。
        </p>
        </div>
        <div className='image_su'>
          <img src={survey} alt="texttexttext"/>
        </div>
        <div className='cb'></div>
      </section>


      <section className='feature' >
        <div className='summary' >
          <h2 className='landh2'> FEATURE </h2>
          <p>
            効率的な学習に必要なものを一つに
          </p>
        </div>
        <div className="row">
          <div className="feature_item">
            <figure>
              <img src={MEETING} alt='meeting'/>
            </figure>
            <div className = 'feature_about' >
              <h3 className='landh3'>ビデオミーティング</h3>
              <p>
              ワンクリックで仲間と会議ができます。
              </p>
            </div>
          </div>
          <div className="feature_item">
            <figure>
              <img src={MATCH} alt='meeting'/>
            </figure>
            <div className = 'feature_about' >
              <h3 className='landh3'>タグマッチング</h3>
              <p>
              簡単な操作で同志を探すことができます。
              </p>
            </div>
          </div>
          <div className="feature_item">
            <figure>
              <img src={SCHEDULE} alt='schedule'/>
            </figure>
            <div className = 'feature_about' >
              <h3 className='landh3'>スケジューリング</h3>
              <p>
              ミーティングの予定を一目で確認できます。
              </p>
            </div>
          </div>
          <div className="feature_item">
            <figure>
              <img src={DEVICES} alt='multi devices'/>
            </figure>
            <div className = 'feature_about' >
              <h3 className='landh3'>どこでも、MatchU</h3>
              <p>
              スマホをはじめ、様々なデバイスで利用できます。
              </p>
            </div>
          </div>
          <div className='cb'>
          </div>
        </div>
      </section>

      <div class="wrap">
        <h2 className='landh2'>Customer's voice </h2>
        <div class="youtube">
          <div class="float-left" >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-_ZJhrkalFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="float-right" >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-_ZJhrkalFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    

      {/* <div class="wrap">
        <iframe width="1000" height="600" class="youtube" src="https://www.youtube.com/embed/1Y-WZH0crAM" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div> */}

      <section className='we_are'>
        <h2 className='landh2 sec_name'>ABOUT US</h2>
        {/* <h2 className='landh2' className='team'>Match U</h2> */}
        <div className='about_row'>
          <div className='info'>
            <h3 className='landh3'>Member</h3>
            <p>
              Manato Irie　Sharma Saurabh　Yu Irie　Ryusei Komine　Ryusei Shimoishi　Junya Honda
            </p>
          </div>
          <div className='info'>
          <h3 className='landh3'>Origin of name</h3>
            <p>
              メンバーが共通して愛飲する、大塚製薬「Match」と「Hack U」をかけた。
            </p>
          </div>
          <div className='info'>
          <h3 className='landh3'>Belonging</h3>
            <p>
              独立行政法人 国立高等専門学校機構 熊本高等専門学校<br />　情報通信エレクトロニクス工学科<br />　制御情報システム工学科
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}