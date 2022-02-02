import React, {useEffect} from 'react';
import styled from "styled-components";
import Particles from "react-tsparticles";

const Wrapper = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

const ParticlesCom = () =>
  <Wrapper>
    <Particles id="tsparticles" options={{

      "background": {
        "color": {
          // "value": "#0F1624"
          "value": "transparent"
        },
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      },
      "fullScreen": {
        "zIndex": -1
      },
      "interactivity": {
        "events": {
          "onClick": {
            "enable": false,
            "mode": "push"
          },
          "onHover": {
            "enable": true,
            "mode": "repulse",
            "parallax": {
              "force": 60
            }
          }
        },
        "modes": {
          "attract": {
            "speed": 2
          },
          "bubble": {
            "distance": 400,
            "duration": 2,
            "opacity": 0.8,
            "size": 40
          },
          "connect": {
            "radius": 10
          },
          "grab": {
            "distance": 400
          },
          "light": {
            "area": {
              "radius": 600
            }
          }
        }
      },
      "particles": {
        "color": {
          "value": "rgba(255,255,255,0.4)"
        },
        "links": {
          "color": {
            "value": "rgba(255,255,255,0.4)"
          },
          "distance": 150,
          "enable": true,
          "opacity": 0.4,
          "shadow": {
            "color": {
              "value": "rgba(255,255,255,0.4)"
            },
            "enable": true
          }
        },
        "move": {
          "angle": {
            "value": 60
          },
          "attract": {
            "rotate": {
              "x": 600,
              "y": 1200
            }
          },
          "enable": true,
          "path": {},
          "outModes": {
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "spin": {}
        },
        "number": {
          "density": {
            "enable": true
          },
          "value": 50
        },
        "opacity": {
          "value": 0.5,
          "animation": {
            "speed": 1,
            "minimumValue": 0.1
          }
        },
        "shadow": {
          "blur": 5,
          "enable": true,
          "offset": {
            "x": 3,
            "y": 3
          }
        },
        "size": {
          "random": {
            "enable": true
          },
          "value": {
            "min": 1,
            "max": 3
          },
          "animation": {
            "speed": 40,
            "minimumValue": 0.1
          }
        }
      }
    }}/>
  </Wrapper>


export default ParticlesCom;
