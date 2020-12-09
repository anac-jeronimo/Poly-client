import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <div className="override">
          <ClipLoader
            //css={override}
            size={150}
            color={"#257AEC"}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default Loader;
