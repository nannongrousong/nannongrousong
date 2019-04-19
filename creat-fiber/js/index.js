window.onload = () => {
    const svg = document.getElementById('mind');
    svg.setAttribute('width', svgWidth);
    svg.setAttribute('height', svgHeight);
    svg.setAttribute('style', 'margin-top: 20px;');
}

const createSVG = (tag) => (document.createElementNS('http://www.w3.org/2000/svg', tag));

const svgWidth = 1000;
const svgHeight = 850;
const rectWidth = 160;
const rectHeight = 60;

const rectList = [{
    //  x y偏移量
    transform: {
        x: 100,
        y: 0
    },
    //  节点文本
    text: 'HostRoot[0]'
}, {
    transform: {
        x: 100,
        y: 150
    },
    text: 'ClassComponent[1]',
    lines: [{
        start: [100 + 80 + 30, 150],
        end: [100 + 80 + 30, rectHeight + 15],
        text: 'return[2]',
        color: '#00FF04'
    }, {
        start: [100 + 80 - 30, rectHeight],
        end: [100 + 80 - 30, rectHeight + 90 - 15],
        text: 'child[3]',
        color: 'red'
    }]
}, {
    transform: {
        x: 100,
        y: 150 * 2
    },
    text: 'div.level1[4]',
    lines: [{
        start: [100 + 80 + 30, 150 * 2],
        end: [100 + 80 + 30, rectHeight + 15 + 150],
        text: 'return[5]',
        color: '#00FF04'
    }, {
        start: [100 + 80 - 30, rectHeight + 150],
        end: [100 + 80 - 30, rectHeight + 90 - 15 + 150],
        text: 'child[6]',
        color: 'red'
    }]
}, {
    transform: {
        x: 100,
        y: 150 * 3
    },
    text: 'button.level2-btn[7]',
    lines: [{
        start: [100 + 80 + 30, 150 * 3],
        end: [100 + 80 + 30, rectHeight + 15 + 150 * 2],
        text: 'return[8]',
        color: '#00FF04'
    }]
}, {
    transform: {
        x: 100 + 300,
        y: 150 * 3
    },
    text: 'div.level2-div1[9]',
    lines: [{
        start: [180 + 300, 150 * 3],
        end: [100 + 180, 150 * 2 + rectHeight * 0.5 + 20],
        text: 'reutrn[10]',
        color: '#00FF04'
    }, {
        start: [160 + 100, 150 * 3 + 30],
        end: [160 + 220, 150 * 3 + 30],
        text: 'sibling[11]',
        color: 'blue'
    }]
}, {
    transform: {
        x: 100 + 300 * 2,
        y: 150 * 3
    },
    text: 'div.level2-div2[12]',
    lines: [{
        start: [180 + 300 * 2, 150 * 3],
        end: [100 + 180, 150 * 2 + rectHeight * 0.5],
        text: 'reutrn[13]',
        color: '#00FF04'
    }, {
        start: [160 + 400, 150 * 3 + 30],
        end: [160 + 520, 150 * 3 + 30],
        text: 'sibling[14]',
        color: 'blue'
    }, {
        start: [100 + 80 - 30, rectHeight + 150 * 2],
        end: [100 + 80 - 30, rectHeight + 90 - 15 + 150 * 2],
        text: 'child[15]',
        color: 'red'
    }]
}, {
    transform: {
        x: 100 + 300,
        y: 150 * 4
    },
    text: 'div.level3-div[16]',
    lines: [{
        start: [180 + 300 + 30, 150 * 4],
        end: [180 + 300 + 30, 150 * 3 + 60 + 20],
        text: 'reutrn[17]',
        color: '#00FF04'
    }, {
        start: [180 + 300 - 30, 150 * 3 + 60],
        end: [180 + 300 - 30, 150 * 4 - 20],
        text: 'child[18]',
        color: 'red'
    }]
}, {
    transform: {
        x: 100 + 300,
        y: 150 * 5
    },
    text: 'p.level4-p1[19]',
    lines: [{
        start: [180 + 300 + 30, 150 * 5],
        end: [180 + 300 + 30, 150 * 4 + 60 + 20],
        text: 'reutrn[20]',
        color: '#00FF04'
    }]
}, {
    transform: {
        x: 100 + 300 * 2,
        y: 150 * 5
    },
    text: 'p.level4-p2[21]',
    lines: [{
        start: [180 + 300 * 2, 150 * 5],
        end: [180 + 400, 150 * 4 + 30],
        text: 'reutrn[22]',
        color: '#00FF04'
    }, {
        start: [160 + 400, 150 * 5 + 30],
        end: [160 + 520, 150 * 5 + 30],
        text: 'sibling[23]',
        color: 'blue'
    }, {
        start: [180 + 300 - 30, 150 * 4 + 60],
        end: [180 + 300 - 30, 150 * 5 - 20],
        text: 'child[24]',
        color: 'red'
    }]
}, {
    transform: {
        x: 100 + 300 * 2,
        y: 150 * 4
    },
    text: 'p.level3-p[25]',
    lines: [{
        start: [180 + 300 * 2 + 30, 150 * 4],
        end: [180 + 300 * 2 + 30, 150 * 3 + 60 + 20],
        text: 'reutrn[26]',
        color: '#00FF04'
    }, {
        start: [180 + 300 * 2 - 30, 150 * 3 + 60],
        end: [180 + 300 * 2 - 30, 150 * 4 - 20],
        text: 'child[27]',
        color: 'red'
    }]
}];

const getSVGChildren = () => {
    const res = [];

    rectList.forEach(({ transform, text, lines = [] }) => {
        const groupNode = createSVG('g');
        groupNode.setAttribute('transform', `translate(${transform.x},${transform.y})`);

        const rectNode = createSVG('rect');
        rectNode.setAttribute('rx', 20);
        rectNode.setAttribute('ry', 20);
        rectNode.setAttribute('width', rectWidth);
        rectNode.setAttribute('height', rectHeight);
        rectNode.setAttribute('fill', '#F78A4A');

        const textNode = createSVG('text');
        textNode.setAttribute('x', rectWidth * 0.5);
        textNode.setAttribute('y', rectHeight * 0.5);
        textNode.setAttribute('dominant-baseline', 'middle');
        textNode.setAttribute('text-anchor', 'middle');
        textNode.setAttribute('fill', '#FFF');
        textNode.textContent = text;

        groupNode.appendChild(rectNode);
        groupNode.appendChild(textNode);
        res.push(groupNode);

        lines.forEach((line) => {
            const lineGroupNode = createSVG('g');
            const lineNode = createSVG('line');
            lineNode.setAttribute('stroke', line.color || '#000');
            lineNode.setAttribute('fill', 'none');
            lineNode.setAttribute('stroke-width', 2);
            lineNode.setAttribute('marker-end', 'url(#markerArrow)');
            lineNode.setAttribute('x1', line.start[0]);
            lineNode.setAttribute('y1', line.start[1]);
            lineNode.setAttribute('x2', line.end[0]);
            lineNode.setAttribute('y2', line.end[1]);

            const lineTextNode = createSVG('text');
            lineTextNode.setAttribute('x', (line.start[0] + line.end[0]) * 0.5);
            lineTextNode.setAttribute('y', (line.start[1] + line.end[1]) * 0.5);
            lineTextNode.setAttribute('dominant-baseline', 'middle');
            lineTextNode.setAttribute('text-anchor', 'middle');
            lineTextNode.setAttribute('stroke', 'black');
            lineTextNode.setAttribute('filter', 'url(#solid)');
            lineTextNode.textContent = line.text;

            lineGroupNode.appendChild(lineNode);
            lineGroupNode.appendChild(lineTextNode);
            res.push(lineGroupNode);
        });
    });
    return res;
}

const frames = [
    0, {
        phase: 'nextUnitOfWork',
        target: 'HostRoot'
    }, {
        phase: 'performUnitOfWork',
        target: 'HostRoot'
    }, {
        phase: 'beginWork',
        target: 'HostRoot'
    }, 1, 2, 3, {
        phase: 'nextUnitOfWork',
        target: 'ClassComponent'
    }, {
        phase: 'performUnitOfWork',
        target: 'ClassComponent'
    }, {
        phase: 'beginWork',
        target: 'ClassComponent'
    }, 4, 5, 6, {
        phase: 'nextUnitOfWork',
        target: 'div.level1'
    }, {
        phase: 'performUnitOfWork',
        target: 'div.level1'
    }, {
        phase: 'beginWork',
        target: 'div.level1'
    }, 7, 8, 9, 10, 11, 12, 13, 14, 15, {
        phase: 'nextUnitOfWork',
        target: 'button.level2-btn'
    }, {
        phase: 'performUnitOfWork',
        target: 'button.level2-btn'
    }, {
        phase: 'beginWork',
        target: 'button.level2-btn'
    }, {
        phase: 'completeUnitOfWork',
        target: 'button.level2-btn'
    }, {
        phase: 'completeWork',
        target: 'button.level2-btn'
    }, {
        phase: 'nextUnitOfWork',
        target: 'div.level2-div1'
    }, {
        phase: 'performUnitOfWork',
        target: 'div.level2-div1'
    }, {
        phase: 'beginWork',
        target: 'div.level2-div1'
    }, 16, 17, 18, {
        phase: 'nextUnitOfWork',
        target: 'div.level3-div'
    }, {
        phase: 'performUnitOfWork',
        target: 'div.level3-div'
    }, {
        phase: 'beginWork',
        target: 'div.level3-div'
    }, 19, 20, 21, 22, 23, 24, {
        phase: 'nextUnitOfWork',
        target: 'p.level4-p1'
    }, {
        phase: 'performUnitOfWork',
        target: 'p.level4-p1'
    }, {
        phase: 'beginWork',
        target: 'p.level4-p1'
    }, {
        phase: 'completeUnitOfWork',
        target: 'p.level4-p1'
    }, {
        phase: 'completeWork',
        target: 'p.level4-p1'
    }, {
        phase: 'nextUnitOfWork',
        target: 'p.level4-p2'
    }, {
        phase: 'performUnitOfWork',
        target: 'p.level4-p2'
    }, {
        phase: 'beginWork',
        target: 'p.level4-p2'
    }, {
        phase: 'completeUnitOfWork',
        target: 'p.level4-p2'
    }, {
        phase: 'completeWork',
        target: 'p.level4-p2'
    }, {
        phase: 'completeUnitOfWork',
        target: 'div.level3-div'
    }, {
        phase: 'completeWork',
        target: 'div.level3-div'
    }, {
        phase: 'completeUnitOfWork',
        target: 'div.level2-div1'
    }, {
        phase: 'completeWork',
        target: 'div.level2-div1'
    }, {
        phase: 'nextUnitOfWork',
        target: 'div.level2-div2'
    }, {
        phase: 'performUnitOfWork',
        target: 'div.level2-div2'
    }, {
        phase: 'beginWork',
        target: 'div.level2-div2'
    }, 25, 26, 27, {
        phase: 'nextUnitOfWork',
        target: 'p.level3-p'
    }, {
        phase: 'performUnitOfWork',
        target: 'p.level3-p'
    }, {
        phase: 'beginWork',
        target: 'p.level3-p'
    }, {
        phase: 'completeUnitOfWork',
        target: 'p.level3-p'
    }, {
        phase: 'completeWork',
        target: 'p.level3-p'
    }, {
        phase: 'completeUnitOfWork',
        target: 'div.level2-div2'
    }, {
        phase: 'completeWork',
        target: 'div.level2-div2'
    }, {
        phase: 'completeUnitOfWork',
        target: 'div.level1'
    }, {
        phase: 'completeWork',
        target: 'div.level1'
    }, {
        phase: 'completeUnitOfWork',
        target: 'ClassComponent'
    }, {
        phase: 'completeWork',
        target: 'ClassComponent'
    }, {
        phase: 'completeUnitOfWork',
        target: 'HostRoot'
    }, {
        phase: 'completeWork',
        target: 'HostRoot'
    }
];

let frameIndex = 0;
let timeID;
const svgChildren = getSVGChildren();

const run = () => {
    document.getElementById('autoRunBtn').setAttribute('disabled', true);

    if (frameIndex == frames.length) {
        alert('Game Over!');
        timeID && clearInterval(timeID);
        document.getElementById('runBtn').removeAttribute('disabled');
        document.getElementById('autoRunBtn').removeAttribute('disabled');
        return;
    }

    const svg = document.getElementById('mind');    
    const frame = frames[frameIndex++];

    if (typeof frame === 'number') {
        svg.appendChild(svgChildren[frame]);
    } else {
        const { phase, target } = frame;

        if (phase === 'nextUnitOfWork') {
            clearPhaseText();
        }

        if (phase === 'completeUnitOfWork' && document.getElementById('beginWork').textContent !== target) {
            clearPhaseText();
        }

        document.getElementById(phase).textContent = target;
    }
};

const autoRun = () => {
    document.getElementById('runBtn').setAttribute('disabled', true);

    timeID = setInterval(() => {
        run();
    }, 1000);
};

const refresh = () => {
    location.reload();
};

const clearPhaseText = () => {
    ['nextUnitOfWork', 'performUnitOfWork', 'beginWork', 'completeUnitOfWork', 'completeWork'].forEach((pp) => {
        document.getElementById(pp).textContent = '';
    });
};