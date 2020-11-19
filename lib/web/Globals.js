"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
exports.styles = (props) => {
    const { fonts } = props.viewport;
    const { colors } = props.theme;
    return `
      h1, h1.ant-typography {
        font-size: ${fonts.xxxl}px;
        color: ${colors.text};
      }

      h2, h2.ant-typography {
        font-size: ${fonts.xxl}px;
        color: ${colors.text};
      }

      h3, h3.ant-typography {
        font-size: ${fonts.xl}px;
        color: ${colors.text};
      }

      h3, h4.ant-typography {
        font-size: ${fonts.l}px;
        color: ${colors.text};
      }

      p, div.ant-typography, .ant-typography p  {
        font-size: ${fonts.m}px;
        color: ${colors.text};
      }

      .ant-btn, .ant-btn-lg {
        height: ${fonts.xxxl}px;
        font-size: ${fonts.l}px;
        padding: 0px ${fonts.m}px;
        margin: ${fonts.m}px;
        background-color: ${colors.primary};
      }

      .ant-btn:hover, .ant-btn-lg:hover {
        background-color: ${colors.secondary};
      }

      .ant-btn-icon-only.ant-btn-lg {
        background-color: transparent;
        border: none;
        height: ${fonts.xxxl}px;
      }

      .ant-btn-icon-only.ant-btn-lg > * {
        font-size: ${fonts.l}px;
        background-color: transparent;
      }

      .ant-avatar {
        height: ${fonts.xxxl}px;
        width: ${fonts.xxxl}px;
        margin: ${fonts.m}px;
      }
    `;
};
//# sourceMappingURL=Globals.js.map