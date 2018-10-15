<?php
    $data=[
        [
            'img'=>'image/list/'.mt_rand(1,390).'.jpg',
            'title'=>'宏定义机械电竞游戏...',
            'price'=>'￥'.mt_rand(1,190).'.00',
        ],
        [
            'img'=>'image/list/'.mt_rand(1,390).'.jpg',
            'title'=>'鹅卵石充电宝...',
            'price'=>'￥'.mt_rand(1,290).'.00',
        ],
        [
            'img'=>'image/list/'.mt_rand(1,390).'.jpg',
            'title'=>'无线蓝牙 游戏手柄...',
            'price'=>'￥'.mt_rand(1,90).'.00',
        ],
        [
            'img'=>'image/list/'.mt_rand(1,390).'.jpg',
            'title'=>'狼蛛游戏键鼠...',
            'price'=>'￥'.mt_rand(1,190).'.00',
        ],
        [
            'img'=>'image/list/'.mt_rand(1,390).'.jpg',
            'title'=>'VR-i7虚拟现实眼镜...',
            'price'=>'￥'.mt_rand(1,390).'.00',
        ]

    ];
    echo json_encode($data);
?>