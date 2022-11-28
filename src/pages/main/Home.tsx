import styled from "styled-components";
import { Space } from "antd";
import detopiaIcon from "../../assets/Detopia.png";
import Avatar from "../../assets/Avatar.png";
import searchIcon from "../../assets/search.png";
import projectData from "./data";

export const GameHome = () => {
  const { head, gameNews, bestGame, bottomInfo } = projectData;

  function locateLink(link: string) {
    window.location.href = link;
  }
  return (
    <Container>
      <Header>
        <div className="icon">
          <img src={detopiaIcon} width={67} height={70}></img>
        </div>
        <Space size={80}>
          <div>Home</div>
          <div>About us</div>
          <div>For You</div>
          <div>Arcade</div>
        </Space>
        <div className="avatar">
          <img src={Avatar} width={104} height={104} />
        </div>
      </Header>
      <Body>
        <div className="searching-box">
          <h2>{head.title}</h2>
          <h3>{head.content}</h3>
          <div className="input-box">
            <img src={searchIcon} width={15} />
            <input placeholder="search" />
          </div>
        </div>
        <InfoBox>
          <div className="info-left">
            {gameNews.map((item, index) => {
              return (
                <div className="game-news">
                  <img src={item.image} width={587} height={295} />
                  <div>
                    <span className="news-title">
                      <img src={item.avatar} width={77} height={77} />
                      <button>Join Game</button>
                      <h4>{item.tag}</h4>
                    </span>
                    <div>
                      <h2>{item.title}</h2>
                      <h5>{item.content}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="info-right">
            <h2>Best Game</h2>
            <Space direction="vertical">
              {bestGame.map((item, index) => {
                return (
                  <div className="best-game">
                    <div>
                      <img
                        src={item.image}
                        width={140}
                        onClick={() => locateLink(item.link)}
                      />
                    </div>
                    <div>
                      <div className="tag-box">
                        <button onClick={() => locateLink(item.link)}>
                          Join Game
                        </button>
                        <h4>{item.tag}</h4>
                      </div>
                      <h3>{item.titile}</h3>
                    </div>
                  </div>
                );
              })}
            </Space>
          </div>
        </InfoBox>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background: linear-gradient(176.03deg, #c10580 -34.57%, #030115 96.75%);
  display: flex;
  flex-direction: column;
  aligin-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 50px 0;
  .ant-space {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 0.7;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 34px;

    color: #ffffff;
  }
  .icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 0.15;
  }
  .avatar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 0.15;
  }
`;

const Body = styled.div`
  width: 100vw;
  .searching-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    text-align: center;
    color: #ffffff;
    margin: 30px 0 20px 0;
  }

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    margin: 10px 0 80px 0;
    color: #ffffff;
  }

  .input-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #210033;
    border-radius: 10px;
    padding-left: 20px;
    input {
      width: 380px;
      height: 49px;
      outline: none;
      border: none;
      background: #210033;
      border-radius: 10px;
      margin-left: 10px;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
    }
  }
`;

const InfoBox = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: row;

  .info-left {
    flex: 0.45;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    .game-news {
      padding: 30px;
    }

    .news-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 30px 0 10px 0;

      button {
        width: 164.04px;
        height: 48px;
        border: none;
        background: #fa9021;
        margin: 0 20px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 187.5%;
        /* or 26px */

        color: #ffffff;
      }

      h4 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 187.5%;
        /* identical to box height, or 30px */

        color: #ffffff;
      }
    }

    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 45px;
      /* identical to box height */
      text-align: initial;
      color: #ffffff;
    }

    h5 {
      text-align: initial;
      color: #ffffff;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 207.8%;
      padding: 0 30px 0 0;
    }
  }

  .info-right {
    flex: 0.55;
    background: rgba(33, 0, 51, 0.4);
    border-radius: 30px;
    padding: 50px;
    h2 {
    }

    .best-game {
      display: flex;
      flex-direction: row;
      margin: 30px 50px 0 20px;
      button {
        width: 137.97px;
        height: 39.9px;
        background: #d32f67;
        border: none;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 187.5%;

        color: #ffffff;
      }

      h3 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 23px;
        line-height: 34px;
        text-align: initial;
        color: #ffffff;
      }

      h4 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 187.5%;
        color: #ffffff;
      }

      img {
        margin: 0 80px 0 30px;
        cursor: pointer;
      }

      .tag-box {
        display: flex;
        flex-direction: row;
        align-items: center;

        button {
          margin-right: 50px;
          cursor: pointer;
        }
      }
    }
  }
`;
