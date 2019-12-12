import React from "react";
import { connect } from "react-redux";

import { getQuote } from "../actions/index";

// import Loader from "react-loader-spinner";
import styled from "styled-components";

const Quotes = props => {
  // console.log("from quotes", props);

  const Div = styled.section`
    max-width: 1250px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    flex-flow: wrap;
    align-items: center;
  `;

  const Title = styled.section`
    opacity: 0.6;
    padding: 1%;
    background: transparent;
    align-items: center;
    max-width: 300px;
    margin: 2%;
    border: 2px dotted antiquewhite;
    border-radius: 15px;
  `;
  return (
    <div>
      <h1> Some Programming Quotes</h1>

      <button onClick={props.getQuote}> Get Quotes</button>
      <h1>{props.isFetching && <h1>loading... </h1>}</h1>
      <Div>
        {props.quote.map(quote => {
          return (
            <Title>
              <p>
                '{quote.en}' - {quote.author}
              </p>
            </Title>
          );
        })}
      </Div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getQuote })(Quotes);
