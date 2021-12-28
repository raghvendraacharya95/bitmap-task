# Author Raghvendra Acharya
# Date 2021-12-28

# Description
There is given a rectangular bitmap of size n*m. Each pixel of the bitmap is either white or
black, but at least one is white.We need to compute distance between two points using this formula 
`p1=(i1,j1) and p2=(i2,j2) is defined as d(p1,p2)=|i1-i2|+|j1-j2|.`


# Prerequisites

You need to install and setup Node.js and TypeScript on your system.

# Setup, Test And Run

- Clone this Repo

```
Install dependencies
```

Command - `npm install`

To Run tests

command - `npm run test`

To Run program

```
cat sample_input.txt | npm run start
```

Input:

```shell
1 // number of test cases
3 4
0001
0011
0110
```

Output:

```
3 2 1 0
2 1 0 0
1 0 0 1
```