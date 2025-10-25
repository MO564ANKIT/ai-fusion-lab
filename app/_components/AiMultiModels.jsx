import React, { useState } from 'react';
import AiModelList from './../../shared/AiModelList';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../components/ui/select";
import { Switch } from "../../components/ui/switch";
import { MessageSquare, Lock } from "lucide-react";
import { Button } from "../../components/ui/button"

function AiMultiModels() {
  const [aiModelList, setAiModelList] = useState(AiModelList);

  const onToggleChange = (modelName, value) => {
    setAiModelList(prev =>
      prev.map(m => (m.model === modelName ? { ...m, enable: value } : m))
    );
  };

  return (
    <div className='flex flex-1 h-[75vh] border-b border-border'>
      {aiModelList.map((model) => (
        <div
          key={model.model} // ✅ Key on outermost div
          className={`flex flex-col border-r h-full overflow-auto ${model.enable ? 'flex-1 min-w-[400px]' : 'w-[100px] flex-none'}`}
        >
          {/* Top row: icon + select + switch */}
          <div className='flex w-full h-[70px] items-center justify-between border-b p-4'>
            <div className='flex items-center gap-4'>
              <Image src={model.icon} alt={model.model} width={24} height={24} />
              {model.enable && (
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={model.subModel[0]?.name || "Select model"} />
                  </SelectTrigger>
                  <SelectContent>
                    {model.subModel.map(subModel => (
                      <SelectItem key={subModel.name} value={subModel.name}>
                        {subModel.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            <div>
              {model.enable ? (
                <Switch
                  checked={model.enable}
                  onCheckedChange={(v) => onToggleChange(model.model, v)}
                />
              ) : (
                <MessageSquare
                  onClick={() => onToggleChange(model.model, true)}
                  className="cursor-pointer text-gray-500 hover:text-blue-600 transition"
                />
              )}
            </div>
          </div>

          {/* Premium button, only if enabled */}
          {model.premium && model.enable && (
            <div className='flex items-center justify-center p-4'>
              <Button><Lock /> Upgrade to Unlock</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AiMultiModels;
