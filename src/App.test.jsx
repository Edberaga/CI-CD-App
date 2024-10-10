import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test("App Form Submission", async () => {
    render(<App />);
    const emailInput = screen.getByTestId("emailInput");
    const submitButton = screen.getByTestId("submitButton");

    await userEvent.type(emailInput, 'edbertjonnathan@gmail.com');
    expect(submitButton.disabled).toBe(false);
})