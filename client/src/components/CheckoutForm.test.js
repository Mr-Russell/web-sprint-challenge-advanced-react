import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const container = render(<CheckoutForm />);

    const header = container.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const form = render(<CheckoutForm />);

    const firstName = form.getByLabelText(/first name:/i);
    fireEvent.change(firstName, {target: {value: 'Tyler' } });

    const lastName = form.getByLabelText(/last name:/i);
    fireEvent.change(lastName, {target: {value: 'Durden' } });

    const address = form.getByLabelText(/address:/i);
    fireEvent.change(address, {target: {value: '420 paper street' } });

    const city = form.getByLabelText(/city:/i);
    fireEvent.change(city, {target: {value: 'Wilmington' } });

    const state = form.getByLabelText(/state:/i);
    fireEvent.change(state, {target: {value: 'DE' } });

    const zipCode = form.getByLabelText(/zip:/i);
    fireEvent.change(zipCode, {target: {value: '19886' } });

    const button = form.getByTestId(/checkoutbtn/i);
    fireEvent.click(button);

    const successMessage = form.getByTestId(/successmessage/i);
    expect(successMessage).toBeInTheDocument();

    const nameSuccess = form.getByText(/tyler durden/i);
    expect(nameSuccess).toBeInTheDocument();

    const addressSuccess = form.getByText(/420 paper street/i);
    expect(addressSuccess).toBeInTheDocument();

    const cityStateZipSuccess = form.getByText(/wilmington, de 19886/i);
    expect(cityStateZipSuccess).toBeInTheDocument();
});
