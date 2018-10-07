# Contributing to Crypto News

First off, thanks for taking the time to contribute! The following is a set of guidelines for contributing to Crypto News, which are hosted in the [Crypto News Repository](https://github.com/Bartozzz/crypto-news) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table of contents

* [Code of Conduct](#code-of-conduct)
* [How can I contribute?](#how-can-i-contribute)
  * [Reporting bugs](#reporting-bugs)
  * [Suggesting enhancements](#suggesting-enhancements)
  * [Your first code contribution](#your-first-code-contribution)
* [Styleguides](#styleguides)
  * [Git commit messages](#git-commit-messages)
  * [JavaScript styleguide](#javascript-styleguide)
  * [Documentation styleguide](#documentation-styleguide)

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [bartosz@laniewski.me](mailto:bartosz@laniewski.me).

## How can I contribute?

### Reporting bugs

This section guides you through submitting a bug report for Crypto News. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports. Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](ISSUE_TEMPLATE.md), the information it asks for helps us resolve issues faster.

#### Before submitting a bug report

* **Check the DevTools console**. You might be able to find the cause of the problem and fix things yourself. Most importantly, check if you can reproduce the problem [in the latest version of Crypto News](https://github.com/Bartozzz/crypto-news/releases).
* **Determine which component causes the bug**. Sometimes the issue comes from an external dependency, not Crypto News components.
* **Perform a cursory search** to see if the problem has already been reported. If it is the case and the issue is still open, add a comment to the existing issue instead of opening a new one.

#### How do I submit a (good) bug report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined which component your bug is related to, create an issue and provide the following information by filling in [the template](ISSUE_TEMPLATE.md). Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps to reproduce the problem** in as many details as possible. When listing steps, don't just say what you did, but explain how you did it. Provide specific examples to demonstrate the steps.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior. **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of Crypto News) or was this always a problem?
* **Can you reproduce the problem in an [older version of Crypto News](https://github.com/Bartozzz/crypto-news/releases)?** What's the most recent version in which the problem doesn't happen?
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* **Does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:

* **What's the name and version of the browser you're using**?
* **Which version of Crypto News are you using?**

### Suggesting enhancements

This section guides you through submitting an enhancement suggestion for Crypto News, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions. Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before submitting an enhancement suggestion

* Most importantly, check if you're using [the latest version of Crypto News](https://github.com/Bartozzz/crypto-news/releases).
* Perform a cursory search to see if the enhancement has already been suggested.

#### How do I submit a (good) enhancement suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Simply create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippet.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most Crypto News users.

### Your first code contribution

Unsure where to begin contributing to Crypto News? You can start by looking through these `beginner` and `help-wanted` issues:

* Beginner issues - issues which should only require a few lines of code, and a test or two.
* Help wanted issues - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have. When making Pull Reqiest, we encourage you to follow those guidelines:

* Include screenshots and/or videos whenever possible.
* Follow the [JavaScript](#javascript-styleguide) styleguide.
* End all files with a newline.
* Avoid browser-dependent code.
* Place requires in the following order:
    * Dependencies (such as `vue`);
    * Vue modules (such as `componentes``);
    * Other modules (such as `helpers``);

## Styleguides

### Git commit messages

* Use the present tense (*"Add feature"* not *"Added feature"*).
* Use the imperative mood (*"Move cursor to..."* not *"Moves cursor to..."*).

### JavaScript styleguide

Consider using a Linter package such as ESLinter.

### SCSS styleguide

Consider using a Linter package such as stylelint.

### Documentation styleguide

Use [JSDoc](http://usejsdoc.org/).
