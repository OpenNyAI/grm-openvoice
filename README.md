# NextGen CPGRAMS Grievance Management System

A modern, interactive grievance handling application powered by Anthropic Claude AI that revolutionizes how citizens submit and resolve grievances. This system features multi-modal input methods including text, voice, and YouTube video processing, combined with intelligent classification and routing. Designed as a showcase for the NextGen CPGRAMS initiative, it provides an intuitive interface for citizens to file grievances, track their status, and receive AI-powered assistance throughout the resolution process.

## Features

- **AI-Powered Assistance**: Utilizes Anthropic Claude to provide empathetic guidance and support for grievance resolution
- **Modern UI/UX**: Clean, responsive interface with Lucide React icons
- **Interactive Chat Interface**: 
  - User messages displayed on the right
  - Assistant messages on the left
  - Distinct styling for AI reasoning sections with purple highlights and "Reasoning" labels
  - Loading indicators during tool invocations
- **Grievance Submission**: Structured form for submitting detailed grievance information
- **API Integration**: Connects to the grievance handling API at https://grm-api.vercel.app/grievances/

## Technical Stack

- **Frontend**: Next.js with TypeScript
- **UI Components**: React with modern styling
- **Icons**: Lucide React
- **AI Integration**: Anthropic Claude

## Getting Started

> [!NOTE]
> Make sure you have [npm installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. Install packages at project root:

    ```bash
    npm i
    ```

2. Copy the template.env file as `.env` at project root and define necessary environment variables.

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

This is an interactive chat-based grievance filing system developed as part of the NextGen CPGRAMS. The application offers multiple ways to submit and manage grievances:

1. **Text-Based Interaction**: Type your grievance details in the chat interface
2. **Voice Input**: Speak your grievance which will be transcribed and processed
3. **YouTube Video Processing**: Submit YouTube URLs containing grievance information which will be automatically categorized and filed
4. **Information Queries**: Ask scheme-related questions to get relevant information
5. **Guided Form Submission**: Navigate through a structured form to submit detailed grievances including:
   - Personal details
   - Pension information
   - Grievance description
   - Expected resolution
6. **AI-Powered Assistance**: Get personalized help throughout the grievance process

## API Integration

The application integrates with the grievance API endpoint at `https://grm-api.vercel.app/grievances/`. Ensure proper request formatting when submitting grievances to avoid 422 Unprocessable Entity errors.
