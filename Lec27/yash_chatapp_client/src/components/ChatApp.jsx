import { Search, Send } from 'lucide-react'
import Avatar from './Avatar'
import { CONVERSATIONS } from '../utils/data'
import { useEffect, useRef, useState } from 'react'

const ChatApp = () => {
    const [text, setText] = useState("");
    const textareaRef = useRef(null);

    useEffect(() => {
        const el = textareaRef.current;
        if(!el) return;
        el.style.height = "0px";
        el.style.height = Math.min(el.scrollHeight, 160) + "px";
    }, [])

  return (
    <div className='h-screen flex bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(70%_60%_at_80%_10%,rgba(236,72,153,0.15),transparent_60%)]'>
        {/* Sidebar */}
        <aside className='w-[360px] border-r border-zinc-200 flex flex-col h-full bg-white'>
            <div className='flex items-center gap-2 p-4'>
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 grid place-items-center text-white font-bold shadow">C</div>
                <div>
                    <div className='font-semibold'>Chats</div>
                    <div className='text-xs text-zinc-500'>Static preview</div>
                </div>
            </div>

            {/* Sidebar: Search box */}
            <div className='px-4'>
                <div className='relative'>
                    <Search className='absolute left-3 top-3 h-4 w-4'/>
                    <input type="text" placeholder="Search people" className='ps-8 pe-4 w-full rounded-2xl py-2 border border-zinc-200 outline-none focus:ring-2 focus:ring-indigo-400'/>
                </div>
            </div>

            {/* Sidebar: Conversation heading */}
            <div className="mt-3 mb-2 px-4 text-xs uppercase tracking-wide text-zinc-500">Conversations</div>

            {/* Sidebar: List of Conversations */}
            <div className='px-4 pb-4 flex-1 overflow-y-auto'>
                { CONVERSATIONS.map( c => (
                    <div key={c.id} className='select-none border border-zinc-200 hover:bg-zinc-50/80 rounded-2xl flex items-center p-3 gap-3 mb-2'>
                        {/* <div className='rounded-full border w-10 h-10 flex justify-center items-center'>
                            AJ
                        </div> */}
                        <div>
                            <Avatar name={c.name}/>
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-center justify-between'>
                                <span>{c.name}</span>
                                <span className='text-xs text-zinc-500'>21:41</span>
                            </div>
                            <div className='text-sm text-zinc-600'>{c.lastMessage.text}</div>
                        </div>
                    </div>
                )) }
            </div>
        </aside>

        {/* Chat Area */}
        <main className='flex flex-col flex-1'>
            {/* Header */}
            <div className='p-3 bg-white/70'>
                <div className='flex items-center gap-3'>
                    <Avatar name='Shreyance Bodh'/>
                    <div>
                        <div className='font-semibold'>{"Shreyance Bodh"}</div>
                        <div className='text-green-500 text-xs'>Online</div>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-4 md:px-6 md:py-6">
                <div className='max-w-3xl mx-auto space-y-4'>
                    <div className='flex justify-start'>
                        <div className='flex items-end gap-2 max-w-[80%]'>
                            <Avatar name='Abhishek Yadav' size={32}/>
                            <div className='px-3 py-2 rounded-2xl rounded-bl-md shadow-sm text-sm border border-zinc-200/60'>
                                <p>Morning! ☀️</p>
                                <p className='text-[10px] mt-1 text-zinc-500'>21:28</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <div className='flex items-end gap-2 max-w-[80%]'>
                            {/* <Avatar name='Abhishek Yadav' size={32}/> */}
                            <div className='px-3 py-2 rounded-2xl rounded-br-md shadow-sm text-sm bg-gradient-to-br from-indigo-600 to-violet-600 bg-indigo-600 text-white'>
                                <p>Hi wassup? how you doin?? </p>
                                <p className='text-[10px] mt-1 text-white'>21:28</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-start'>
                        <div className='flex items-end gap-2 max-w-[80%]'>
                            <Avatar name='Abhishek Yadav' size={32}/>
                            <div className='px-3 py-2 rounded-2xl rounded-bl-md shadow-sm text-sm border border-zinc-200/60'>
                                <p>Morning! ☀️</p>
                                <p className='text-[10px] mt-1 text-zinc-500'>21:28</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Msg Inputs */}
            <div className='border-t border-zinc-200 p-3'>
                <div className='max-w-3xl mx-auto flex items-end gap-2'>
                    <textarea 
                        ref={textareaRef}
                        rows={1}
                        className='max-h-40 outline-none flex-1 border border-zinc-200 rounded-2xl px-2 py-2 resize-none placeholder:text-zinc-400 text-zinc-900' 
                        placeholder='Write a message...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className='rounded-2xl bg-indigo-600 px-4 py-2 text-white'>
                        <div className='flex items-center gap-2'>
                            <Send className='w-4 h-4' />
                            <span>Send</span>
                        </div>
                    </button>
                </div>
            </div>
        </main>
    </div>
  )
}

export default ChatApp