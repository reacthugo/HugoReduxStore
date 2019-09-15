import React, { Component } from "react";

export class ErrorLoading extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Atualize o state para que a próxima renderização exiba a UI de fallback.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            // Você pode renderizar qualquer UI como fallback
            return <h1>Error while loading the component.</h1>;
        }

        return this.props.children;
    }
}
