//@ts-check

(function () {
    const vscode = acquireVsCodeApi();

    window.addEventListener('message', event => {
        const v = event.data.command;
    });

    function init() {
        vscode.postMessage({type: 'showPanel'});
    }

    var FunctionList = {
        // DLV
        'HAMILTON_PATH': function () { vscode.postMessage({ type: 'HAMILTON_PATH' }); },
        'KNAPSACK_PROBLEM': function () { vscode.postMessage({ type: 'KNAPSACK_PROBLEM' }); },
        'MINIMUM_SPANNING_TREE': function () { vscode.postMessage({ type: 'MINIMUM_SPANNING_TREE' }); },
        '3_COLORABILITY': function () { vscode.postMessage({ type: '3_COLORABILITY' }); },
        'SEATING': function () { vscode.postMessage({ type: 'SEATING' }); },
        'STRATEGIC_COMPANIES': function () { vscode.postMessage({ type: 'STRATEGIC_COMPANIES' }); },
        'VERTEX_COVER': function () { vscode.postMessage({ type: 'VERTEX_COVER' }); },
    };

    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            if (typeof FunctionList[btn.dataset.act] === 'function') FunctionList[btn.dataset.act]();
        }, false);
    });

    init();
}());
