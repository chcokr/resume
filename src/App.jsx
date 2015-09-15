import lessVars from '!!less-interop-loader!./App.less'

import Footer from './Footer';
import Header from './Header';
import HeaderGlyph from './HeaderGlyph';
import HttpsLink from './HttpsLink';
import HttpsLinkInParens from './HttpsLinkInParens';
import Item from './Item';
import Section from './Section';

import React from 'react';
import DocumentTitle from 'react-document-title';

export default class App extends React.Component {
  render() {
    return (
      <DocumentTitle title="YJ Yang">
        <div>
          <Header>
            <h1 className="pull-left" style={{margin: 0}}>
              <b>YJ Yang</b>
            </h1>
            <small className="pull-right" style={{marginTop: 9}}>
              <HeaderGlyph glyph="home" />
              2752 Campus Walk Ave, APT 23F, Durham, NC 27705
              <HeaderGlyph glyph="phone" />
              510-646-7238
              <HeaderGlyph glyph="envelope" />
              <a href="mailto:chcokr@gmail.com">chcokr@gmail.com</a>
            </small>
          </Header>
          <Section title="Work Experience">
            <Item
              title={
                'Microsoft Internship -' +
                  ' Software Developer in Test -' +
                  ' Xbox Online Store'
              }
              location="Redmond, WA"
              period="Jun - Aug 2014">
              <ul>
                <li>
                  Deployed through rigorous code reviews a web app that
                  performs end-to-end validation against customer support
                  scenarios
                </li>
                <li>
                  Coordinated integration among several teams to ensure success
                  of product in end-user settings
                </li>
                <li>
                  <b><i>Technical keywords: </i></b>
                  C#, ASP.NET, Knockout.js, RxJS, jQuery
                </li>
              </ul>
            </Item>
            <Item
              title="Yamm - A Food Suggestion App Startup"
              location="Seoul, South Korea"
              period="May - Nov 2014">
              <ul>
                <li>
                  Supervised back-end and dev-ops of an app that suggests dishes
                  and recommends relevant restaurants
                </li>
                <li>
                  <b><i>Technical keywords: </i></b>
                   Node.js, MySQL, Redis, cloud services (AWS, etc.)
                </li>
              </ul>
            </Item>
            <Item
              title="Biology Department IT Support"
              location="Durham, NC"
              period="Nov 2013 - Present">
              <ul>
                <li>
                  Communicate technical concepts to 400+ non-IT-friendly faculty
                  and staff in cases of support requests
                </li>
                <li>
                  Develop an internal web app to help track inventory statuses
                  with <b><i>React.js</i></b> and <b><i>Deployd</i></b>
                </li>
              </ul>
            </Item>
          </Section>
          <Section title="Project Experience">
            <Item
              title="Coaching Assistance App for Duke Fencing"
              location="Durham, NC"
              link="github.com/chcokr/dufence"
              period="Aug 2015 - Present">
              <ul>
                <li>
                  Implement a score-tracking web app for the fencing coach with
                  <b><i> React.js</i></b> and <b><i>Firebase</i></b>
                </li>
                <li>
                  Prototype a visually appealing responsive design using Sketch
                </li>
              </ul>
            </Item>
            <Item
              title="Project 1636 - A Student Mentoring Service"
              location="Singapore"
              period="Aug 2015">
              <ul>
                <li>
                  Demoed a website that matches high school students with
                  mentors at top universities, using <b><i>React.js</i></b>,
                  <b><i> Bootstrap</i></b> and <b><i>Firebase</i></b>
                </li>
                <li>
                  Led a remote team of three developers, maintaining code
                  commits via GitHub
                </li>
              </ul>
            </Item>
            <Item
              title="Root Growth Modeling Research, Benfey Laboratory"
              location="Durham, NC"
              period="Mar 2015 - Present">
              <ul>
                <li>
                  Research lateral root pattern generation of the Arabidopsis
                  root using MATLAB
                  <HttpsLinkInParens
                    href="github.com/chcokr/root-growth-matlab" />
                </li>
                <li>
                  Simulate an animation of root growth with
                  <b><i> React.js</i></b>
                  <HttpsLinkInParens href="github.com/chcokr/root-growth" />
                </li>
              </ul>
            </Item>
            <Item
              title="Apple-AT&T Big Byte Challenge – Best Native iOS App"
              location="Durham, NC"
              period="Sep 2013">
              <ul>
                <li>
                  Introduced a touch-based interface that brings new music
                  satisfying desired degrees of danceability and energy
                </li>
                <li>
                  Managed an efficient index over a PostgreSQL table of 26+
                  million rows of song information for fast search
                </li>
              </ul>
            </Item>
            <Item
              title="Microsoft Triangle Camp AppHack - Third Place"
              location="Durham, NC"
              period="Sep 2013">
              <ul>
                <li>
                  Published a Windows 8 app that, given a keyword, evaluates
                  positivity/negativity of recent news articles
                </li>
                <li>
                  Learned and applied WinJS and five REST APIs to the project in
                  less than 20 hours
                </li>
              </ul>
            </Item>
          </Section>
          <Section
            title="Open-source Activities"
            style={{marginBottom: lessVars.marginBetweenItems}}>
            <p style={{marginBottom: lessVars.marginBetweenItems / 2}}>
              All of the following come with good documentation and code
              coverage.
            </p>
            <ul>
              <li>
                <b>babel-plugin-stilr-classnames: </b>
                Authored a <b><i>Babel plugin</i></b> that statically evaluates
                uses of CSS-in-JS style definitions for use in hot-loaded and
                production environments.
                <HttpsLinkInParens
                  href="github.com/chcokr/babel-plugin-stilr-classnames" />
              </li>
              <li>
                <b>extract-stilr-webpack-plugin: </b>
                Authored a <b><i>Webpack plugin</i></b> that extracts CSS-in-JS
                style definitions into a single CSS file, for production use.
                <HttpsLinkInParens
                  href="github.com/chcokr/extract-stilr-webpack-plugin" />
              </li>
              <li>
                <b>less-interop-loader: </b>
                Authored a <b><i>Webpack loader</i></b> that leverages the
                abstract syntax tree of LESS code to import its variables into
                JavaScript.
                <HttpsLinkInParens
                  href="github.com/chcokr/less-interop-loader" />
              </li>
              <li>
                <b>mdast: </b>
                Implemented the file-watching feature of the Markdown parser
                <HttpsLinkInParens
                  href="github.com/wooorm/mdast/pull/57" />,
                and wrote a custom Markdown lint rule.
                <HttpsLinkInParens
                  href="github.com/chcokr/mdast-lint-sentence-newline" />
              </li>
            </ul>
          </Section>
          <Section title="Communication and Service">
            <Item
              title="Blog"
              link="github.com/chcokr/blog">
              <ul>
                <li>
                  Detail technical discoveries such as programming language
                  features, and share knowledge through online forums
                </li>
                <li>
                  Discuss non-technical topics such as human factors in
                  engineering cultures and thoughts on majoring in computer
                  science
                </li>
              </ul>
            </Item>
            <Item
              title="Military Service"
              location="142nd Military Police Company"
              period="Jun 2011 - Mar 2013" />
          </Section>
          <Section title="Education">
            <Item
              title="Duke University"
              location={
                <span>
                  Durham, NC
                  <span style={{marginLeft: 72}}>
                    GPA: 3.70
                  </span>
                  <span style={{marginLeft: 72}}>
                    Bachelor of Science in Computer Science
                  </span>
                </span>}
              period="Dec 2015" />
          </Section>
          <Footer>
            This resume was produced with React.js and Bootstrap:&nbsp;
            <HttpsLink href="github.com/chcokr/resume" />
          </Footer>
        </div>
      </DocumentTitle>
    );
  }
}
