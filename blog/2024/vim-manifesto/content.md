## Introduction

The modal editor's fall into obscurity is truly one of the greatest losses in the history of
computing.

There's no denying that point-and-click is _easy_, and sure, it's enough for the majority of people
using their computer as a minor tool.

But for those who use a text editor as their natural habitat, there's no reason why text editors
should stop at pointing the mouse where you want to go and typing. This leads to the typical editing
session consisting of:

- Scroll around with mouse
- Locate the location where you want to add text
- Move mouse to location, click it
- Finally, move back to the keyboard and make your edit

Then, switch back to your mouse and repeat.

Of course, there are ways in which users seek to streamline this process. Almost everyone who edits
text daily knows at least a few keyboard shortcuts to quickly jump around words and in between lines
to move to nearby points of interest quickly without switching back to the mouse. Other more
dedicated power users might learn a slew of modifier-key based commands to quickly navigate around,
removing the need for a mouse entirely when editing within a file.

All of these, however, are halfway solutions. Namely, they generally utilize a modifier based
approach. Hold `ctrl` (or `option`, on macOS) and use the arrow keys to navigate quickly. Hold
`ctrl` and hit `delete` to delete entire words at once. Hold `shift` to highlight text. `ctrl + c`
copies, `ctrl + v` pastes, `ctrl + x` cuts. You get the idea.

A pseudo- medical condition has even been coined for this reliance on modifier keys: the dreaded
Emacs pinky, where users of emacs, which relies heavily on `ctrl`, `meta`, and other modifier based
shortcuts, experience RSI due to their frequent usage of their pinky to stretch down to those keys.

This method of designing and organizing the text editor is wrong. _Moving around text_ (and files)
is just as, if not more prevalent than inserting text itself. So why treat navigation as an
afterthought? Why should you _edit by default_, and hold a modifier key to temporarily enable a
different control scheme which handles locomotion? This is where the genius of the modal editor
comes in.

## Vim

In Vim, the editor itself is split into three main "modes", hence the classification of "modal".
Instead of treating navigation as an afterthought, Vim opens in its "normal mode", which provides
the user with many keys to move around their text file: `hjkl` as arrow keys, `b`, `e`, and `w`, to
navigate around words, `0`, `$`, and `_` to jump around lines, `{`, `}`, `z`, and more, for quickly
repositioning your cursor and screen vertically. Notice how all of these keys are easily accessible
from the home row. Just as importantly, notice how there's no need for you to hold any modifiers to
access these actions. These keys don't input text in normal mode; they simply handle navigation.
Many point-and-click acolytes believe this to be a failure. "Why wouldn't you want your editor to
_edit_ by default?" Of course, this is not a failure, but one of its greatest strengths. How many
times do you open a file and immediately need to start editing? Almost always, you need to first
navigate to a specific location, usually move or change some text, and then begin editing. In Vim,
this is streamlined by default. You can navigate the entire file using just commands found near the
home row, without needing to use a mouse or hit complicated chords. Instead of treating navigation
as an afterthought for power-users, it treats it as a primary feature of the editor itself.

Written on Neovim.
