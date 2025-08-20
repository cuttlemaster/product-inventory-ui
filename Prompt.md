# AI Collaboration Challenge - Bulk Operations Feature

## Feature Request
Add a bulk operations feature that allows users to select multiple products and perform batch actions (price updates, category changes, deletion) with confirmation dialogs and undo functionality.

## 1. AI Tool Selection

**Which AI tool would you choose and why?**

At the moment, the most experience I have with AI tools is with ChatGPT, so that's where I'd stay for this work. I've found that
my preference for back-and-forth questions and explanations (because I was often not in the code every single day for stretches
at a time) works well with ChatGPT. I've found that using the project feature for ChatGPT where I can add a few context files and
provide initial instructions on how I'd like the AI to act works well for my personal workflow.

I'm positive that using a tool like Cursor or Claude Code could accomplish the work more quickly, but my experience with them both
is pretty limited so far and I prefer a more interactive, step-by-step approach rather than a massive single "prompt and go" approach.

## 2. Comprehensive Prompt

**Write your complete prompt including context about the codebase architecture and any constraints:**

You are a Senior Frontend Engineer. Add a bulk operations feature to our exiting products list in the project named `product-inventory-ui`.

The technologies for the project are: React 18, Next.js, TypeScript, Tailwind (utility classes), Jest + React Testing Library. Do not add any new technologies.

The project already has the following features:
  - A page for Products that renders individual Product cards in a column and row format.
  - Each card displays information specific to the Product it displays.
    - Each product card contains the following information:
      - Name, Description, Category, Stock, Price, and SKU
      - There is a component for the Product card found in src/components/ProductCard.tsx
  - The Products page already has a set of filter controls that allow for filtering by price, category, or stock amount, as well as the ability to reset all filters. This can be found in the src/components/ProductFilters.tsx file
  - There is a global Button component found at src/components/ui/Button.tsx (or use a native <button> or <input type="checkbox"> if necessary).

GOAL: Add and enable the ability to select multiple products on the Products page and perform actions in bulk for price updates, category changes, or deletion. The API and backend connections will be done separately.

Reference files can be found uploaded to this project (meaning the ChatGPT project I'd be using). Create a step-by-step process to follow for adding each piece of the new feature one-by-one. Then, begin with the first step and allow me to confirm the changes before moving on to the next step each time.


## 3. Collaboration Approach

**How would you iterate and collaborate with the AI tool to implement this feature?**

I've found the most success in doing things step-by-step when using AI (at least so far with the tools I've used to this point). That means my
preferred approach is to outline the basics of the task without getting too overbearing in the details and have ChatGPT give me the first step
to execute and then follow down the steps accordingly.

Between each step (or every few) I like to explain back to ChatGPT what I believe we have been doing to confirm I understand its changes in a way
that I can speak to when the time comes. I've found I'm much more able to avoid blindly adding things I can't understand properly or that don't
have the right context for what I'm trying to achieve.

Doing this requires me to take a little more time than most do, but by asking ChatGPT to explain itself every step or two I find it retains the
right context much more and because I'm not in the code every single day it keeps me fresh on concepts. I treat the iterative process with ChatGPT
very much like I might when pair programming with another developer who is teaching me something I've only been briefly exposed to and confirm via
testing and confirmation as I go.

I know it takes longer, but it's been a successful approach for me so far using the tool.
