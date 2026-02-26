<?php

$config = [
    'site' => [
        'title'       => 'Karsten Lindenburg - Portfolio',
        'description' => 'Creative Software Development Portfolio',
        'author'      => 'Karsten Lindenburg',
        'email'       => 'Karstenlindenburg@gmail.com',
        'email_school'=> '102625@glr.nl',
        'school'      => 'Grafisch Lyceum Rotterdam',
        'study'       => 'Creative Software Development',
        'year'        => date('Y'),
    ],

    'github' => [
        'personal' => [
            'username' => 'Karsten0701',
            'url'      => 'https://github.com/Karsten0701',
        ],
        'school' => [
            'username' => 'Karsten07011',
            'url'      => 'https://github.com/Karsten07011',
        ],
    ],

    'nav' => [
        ['label' => 'Over Mij',       'href' => '#about'],
        ['label' => 'Projecten',      'href' => '#projects'],
        ['label' => 'Vaardigheden',   'href' => '#skills'],
        ['label' => 'Contact',        'href' => '#contact'],
    ],

    'projects' => [
        [
            'title'       => 'Build a Theme Park',
            'description' => 'Een populaire Roblox game waar spelers hun eigen themapark kunnen bouwen en beheren. Gebouwd met Luau scripting en custom UI systemen.',
            'badge'       => 'Roblox',
            'badge_type'  => 'primary',
            'color'       => '#e74c3c',
            'stats'       => '900k+ bezoeken',
            'featured'    => true,
            'link'        => null,
        ],
        [
            'title'       => 'MantelZicht',
            'description' => 'Financieel overzicht voor mantelzorgers. Een PHP webapplicatie die helpt bij het beheren van financien.',
            'badge'       => 'PHP',
            'badge_type'  => 'primary',
            'color'       => '#777bb4',
            'stats'       => null,
            'featured'    => false,
            'link'        => 'https://github.com/Karsten0701/MantelZicht',
        ],
        [
            'title'       => 'Project Rotschield',
            'description' => 'AI project gebouwd met Python. Onderzoek en implementatie van artificial intelligence concepten.',
            'badge'       => 'Python',
            'badge_type'  => 'primary',
            'color'       => '#3776ab',
            'stats'       => null,
            'featured'    => false,
            'link'        => 'https://github.com/Karsten0701/Project-Rotschield',
        ],
        [
            'title'       => 'Horror Game',
            'description' => 'Een Roblox horror game, momenteel in actieve ontwikkeling met Luau scripting.',
            'badge'       => 'In ontwikkeling',
            'badge_type'  => 'outline',
            'color'       => '#2ecc71',
            'stats'       => null,
            'featured'    => false,
            'link'        => 'https://github.com/Karsten0701/Horror',
        ],
        [
            'title'       => 'Clash Of Vikings',
            'description' => 'Een Roblox game met Viking-thema, momenteel in actieve ontwikkeling.',
            'badge'       => 'In ontwikkeling',
            'badge_type'  => 'outline',
            'color'       => '#e67e22',
            'stats'       => null,
            'featured'    => false,
            'link'        => null,
        ],
    ],

    'skills' => [
        ['name' => 'HTML',        'desc' => 'Semantische markup',    'icon' => 'bi-filetype-html',  'color' => '#e44d26'],
        ['name' => 'CSS',         'desc' => 'Styling & layout',      'icon' => 'bi-filetype-css',   'color' => '#264de4'],
        ['name' => 'JavaScript',  'desc' => 'Interactiviteit',       'icon' => 'bi-filetype-js',    'color' => '#f0db4f'],
        ['name' => 'PHP',         'desc' => 'Backend development',   'icon' => 'bi-filetype-php',   'color' => '#777bb4'],
        ['name' => 'Python',      'desc' => 'AI & scripting',        'icon' => 'bi-filetype-py',    'color' => '#3776ab'],
        ['name' => 'Luau',        'desc' => 'Roblox scripting',      'icon' => 'bi-code-slash',     'color' => '#00a2ff'],
    ],
];

