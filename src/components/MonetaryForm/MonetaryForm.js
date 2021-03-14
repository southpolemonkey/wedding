import * as React from "react";
import PropTypes from "prop-types";

class MonetaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    this.props.closePopup();
  }

  render() {
    return (
      <div>
        <div className={"modal-backdrop fade show"} style={{ pointerEvents: "none" }}/>
        <div className={"modal fade show d-block"} tabIndex="-1" role="dialog">
          <div onClick={this.closePopup} style={{ top: 0, left: 0, right: 0, bottom: 0, position: "absolute" }}/>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Give A Monetary Gift</h5>
                <button type="button" className="close" onClick={this.closePopup} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div>
                  There will be a wishing well on the day if you would prefer not to give online.
                </div>
                <br/>
                <small>
                  If you use bank transfer, you can send money to PayID 0432546747 or via Paypal
                </small>
              </div>
              <div className="modal-footer">
                {/*Put in paypal user ID*/}
                <a target={"__blank"} href={"https://paypal.me/chenxuanmingzhu"} onClick={this.closePopup}
                   className="btn btn-primary">Continue to Alipay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MonetaryForm.propTypes = {
  _id: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired
};

export default MonetaryForm;