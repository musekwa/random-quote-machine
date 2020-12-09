import React, { Component } from "react";
import { Anchors } from "./Anchors";
import './App.css';
import { Button } from "./Button";
import { QuoteText } from "./QuoteText";

export class QuoteBox extends Component {


    render(){
        return (
            <div id="quote-box">
                <div className="bg-white">
                    <QuoteText 
                        bg={this.props.bg}
                        quote={this.props.quote}
                        quoter={this.props.quoter}
                    />
                    <div className="container">
                        <Anchors 
                            bg={this.props.bg}
                        />
                        <div id="buttons">
                            <Button 
                                bg={this.props.bg}
                                callback={this.props.callback}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <footer id="footer">
                        <p>by Musekwa</p>
                    </footer>
                </div>
            </div>
        )}
}